"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface GLSLHillsProps {
  width?: string | number;
  height?: string | number;
  speed?: number;
  cameraZ?: number;
  planeSize?: number;
  className?: string;
}

const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  varying vec2 vUv;
  varying float vElevation;

  // Classic Simplex Noise 2D
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    float t = uTime * uSpeed * 0.35;
    
    // Soft elegant undulating terrain
    float elevation = snoise(vec2(pos.x * 0.012, pos.y * 0.012 - t)) * 16.0;
    elevation += snoise(vec2(pos.x * 0.028 + t * 0.4, pos.y * 0.028 - t * 0.8)) * 7.0;
    elevation += snoise(vec2(pos.x * 0.06, pos.y * 0.06)) * 2.0;

    pos.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Soft grey with very subtle light purple tint for clean luxury feel
    vec3 softGrey = vec3(0.50, 0.48, 0.54);
    vec3 lightPurpleTint = vec3(0.48, 0.38, 0.62);

    float mixFactor = smoothstep(-15.0, 18.0, vElevation);
    vec3 lineColor = mix(softGrey, lightPurpleTint, mixFactor * 0.4);

    // Subtle contour line shading
    float line = sin(vElevation * 0.9 + vUv.y * 18.0);
    line = smoothstep(0.82, 0.98, line);

    vec3 finalColor = mix(lineColor, lightPurpleTint, line * 0.3);

    // Fade out smoothly towards the top and edges
    float alphaFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
    float alpha = clamp((0.45 + mixFactor * 0.2) * alphaFade, 0.0, 0.7);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export function GLSLHills({
  width = "100%",
  height = "100%",
  speed = 0.35,
  cameraZ = 125,
  planeSize = 256,
  className = "",
}: GLSLHillsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animId: number | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let geometry: THREE.PlaneGeometry | null = null;
    let material: THREE.ShaderMaterial | null = null;
    let mesh: THREE.Mesh | null = null;
    let resizeObserver: ResizeObserver | null = null;

    try {
      const scene = new THREE.Scene();
      const initialW = container.clientWidth || 300;
      const initialH = Math.max(container.clientHeight, 1);

      const camera = new THREE.PerspectiveCamera(
        55,
        initialW / initialH,
        0.1,
        1000
      );
      camera.position.set(0, -65, cameraZ);
      camera.lookAt(0, 15, 0);

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(initialW, initialH);
      renderer.setClearColor(0x000000, 0);

      geometry = new THREE.PlaneGeometry(planeSize, planeSize, 110, 110);

      const uniforms = {
        uTime: { value: 0 },
        uSpeed: { value: speed },
      };

      material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        wireframe: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI * 0.38;
      scene.add(mesh);

      const clock = new THREE.Clock();

      const render = () => {
        if (!renderer) return;
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        animId = requestAnimationFrame(render);
      };

      render();

      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || 300;
        const h = Math.max(container.clientHeight, 1);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          handleResize();
        });
        resizeObserver.observe(container);
      } else {
        window.addEventListener("resize", handleResize);
      }

      return () => {
        if (resizeObserver) {
          resizeObserver.disconnect();
        } else {
          window.removeEventListener("resize", handleResize);
        }
        if (animId !== null) cancelAnimationFrame(animId);
        geometry?.dispose();
        material?.dispose();
        renderer?.dispose();
        if (mesh) scene.remove(mesh);
      };
    } catch (e) {
      console.warn("GLSLHills WebGL initialization failed gracefully:", e);
    }
  }, [cameraZ, planeSize, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none overflow-hidden ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}

export default GLSLHills;
