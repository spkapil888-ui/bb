'use client';

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface CapsuleItem {
  id: string;
  name: string;
  className: string;
  imgSrc: string;
}

const CAPSULES_DATA: CapsuleItem[] = [
  {
    id: 'adobe',
    name: 'Adobe',
    className: 'capsule dark',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Adobe.png',
  },
  {
    id: 'ai',
    name: 'AI',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/AI.png',
  },
  {
    id: 'bubble',
    name: 'Bubble',
    className: 'capsule dark',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Bubble.png',
  },
  {
    id: 'canva',
    name: 'Canva',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Canva.png',
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    className: 'capsule dark',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/ClickUp.png',
  },
  {
    id: 'figma',
    name: 'Figma',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Figma.png',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    className: 'capsule dark tilt',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Google-Ads.png',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    className: 'capsule purple vertical',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Google-Analytics.png',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    className: 'capsule dark tilt',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/HubSpot.png',
  },
  {
    id: 'meta',
    name: 'Meta',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Meta.png',
  },
  {
    id: 'notion',
    name: 'Notion',
    className: 'capsule dark',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Notion.png',
  },
  {
    id: 'semrush',
    name: 'Semrush',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Semrush.png',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Shopify.png',
  },
  {
    id: 'webflow',
    name: 'Webflow',
    className: 'capsule purple tilt',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/Webflow.png',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    className: 'capsule purple',
    imgSrc: 'https://dev.buzznbeyond.com/wp-content/uploads/2026/08/WordPress.png',
  },
];

export function DropCapsuleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let techInitialized = false;
    let techRunner: Matter.Runner | null = null;
    let techEngine: Matter.Engine | null = null;
    let techAnimationFrame: number | null = null;
    let resizeTimer: NodeJS.Timeout | null = null;

    interface CapsuleBody extends Matter.Body {
      el?: HTMLElement;
    }

    const bodies: CapsuleBody[] = [];

    let windowListenersCleanup: (() => void) | null = null;

    const cleanupPhysics = () => {
      if (windowListenersCleanup) {
        windowListenersCleanup();
        windowListenersCleanup = null;
      }
      if (techAnimationFrame) {
        cancelAnimationFrame(techAnimationFrame);
        techAnimationFrame = null;
      }
      if (techRunner) {
        Matter.Runner.stop(techRunner);
        techRunner = null;
      }
      if (techEngine) {
        Matter.World.clear(techEngine.world, false);
        Matter.Engine.clear(techEngine);
        techEngine = null;
      }
      bodies.length = 0;
      techInitialized = false;
    };

    const triggerDrop = () => {
      const stage = stageRef.current;
      if (!stage || !bodies.length) return;

      const width = stage.clientWidth || 1000;
      const isMobile = window.innerWidth < 768;
      const columns = isMobile ? 3 : 5;
      const colWidth = Math.max(110, (width - 120) / columns);

      bodies.forEach((body, index) => {
        Matter.Body.setStatic(body, false);
        const startX = 70 + (index % columns) * colWidth + (Math.random() - 0.5) * 30;
        const startY = -120 - index * 60;

        Matter.Body.setPosition(body, { x: startX, y: startY });
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2,
          y: 3.5 + Math.random() * 3,
        });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);

        const startAngle = index % 3 === 0 ? -0.28 : index % 4 === 0 ? 0.24 : 0;
        Matter.Body.setAngle(body, startAngle);
      });
    };

    const initTechnologyCapsules = () => {
      if (techInitialized) return;

      const stage = stageRef.current;
      if (!stage) return;

      const capsuleEls = Array.from(stage.querySelectorAll<HTMLElement>('.capsule'));
      if (!capsuleEls.length) return;

      techInitialized = true;

      const { Engine, World, Bodies, Body, Runner } = Matter;

      techEngine = Engine.create({
        gravity: { x: 0, y: 1.35, scale: 0.001 },
      });
      const world = techEngine.world;

      const width = stage.clientWidth || 1000;
      const height = stage.clientHeight || 520;

      const wallThickness = 140;
      const floor = Bodies.rectangle(width / 2, height + wallThickness / 2 - 6, width * 2.5, wallThickness, {
        isStatic: true,
        friction: 0.8,
        restitution: 0.28,
      });

      const leftWall = Bodies.rectangle(-wallThickness / 2 + 6, height / 2, wallThickness, height * 4, {
        isStatic: true,
        friction: 0.2,
      });

      const rightWall = Bodies.rectangle(width + wallThickness / 2 - 6, height / 2, wallThickness, height * 4, {
        isStatic: true,
        friction: 0.2,
      });

      World.add(world, [floor, leftWall, rightWall]);

      const isMobile = window.innerWidth < 768;
      const columns = isMobile ? 3 : 5;
      const colWidth = Math.max(isMobile ? 70 : 110, (width - (isMobile ? 40 : 120)) / columns);

      capsuleEls.forEach((el, index) => {
        const isVertical = el.classList.contains('vertical');
        const defaultW = isVertical ? (isMobile ? 44 : 90) : (isMobile ? 98 : 210);
        const defaultH = isVertical ? (isMobile ? 108 : 230) : (isMobile ? 44 : 94);

        const w = el.offsetWidth > 20 ? el.offsetWidth : defaultW;
        const h = el.offsetHeight > 20 ? el.offsetHeight : defaultH;

        const startX = (isMobile ? 30 : 70) + (index % columns) * colWidth + (Math.random() - 0.5) * 15;
        const startY = -80 - index * (isMobile ? 40 : 60);

        const body: CapsuleBody = Bodies.rectangle(startX, startY, w, h, {
          chamfer: { radius: Math.min(w, h) / 2 },
          restitution: 0.35,
          friction: 0.75,
          frictionAir: 0.02,
          density: 0.0025,
        });

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2,
          y: 3.5 + Math.random() * 3,
        });

        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08);

        const startAngle = index % 3 === 0 ? -0.28 : index % 4 === 0 ? 0.24 : 0;
        Body.setAngle(body, startAngle);

        body.el = el;
        bodies.push(body);
      });

      World.add(world, bodies);

      // Smooth custom Drag & Throw system
      let draggedBody: CapsuleBody | null = null;
      let dragOffset = { x: 0, y: 0 };
      const previousPositions: { x: number; y: number; time: number }[] = [];

      const getStagePos = (clientX: number, clientY: number) => {
        const rect = stage.getBoundingClientRect();
        return {
          x: clientX - rect.left,
          y: clientY - rect.top,
        };
      };

      const startDrag = (body: CapsuleBody, clientX: number, clientY: number) => {
        draggedBody = body;
        const pos = getStagePos(clientX, clientY);
        dragOffset = {
          x: pos.x - body.position.x,
          y: pos.y - body.position.y,
        };
        Body.setStatic(body, false);
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
        previousPositions.length = 0;
        previousPositions.push({ x: body.position.x, y: body.position.y, time: performance.now() });
      };

      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (!draggedBody) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        const pos = getStagePos(clientX, clientY);

        const targetX = Math.max(30, Math.min(width - 30, pos.x - dragOffset.x));
        const targetY = pos.y - dragOffset.y;

        const now = performance.now();
        previousPositions.push({ x: targetX, y: targetY, time: now });
        if (previousPositions.length > 5) previousPositions.shift();

        Body.setPosition(draggedBody, { x: targetX, y: targetY });
      };

      const onPointerUp = () => {
        if (!draggedBody) return;

        if (previousPositions.length >= 2) {
          const last = previousPositions[previousPositions.length - 1];
          const first = previousPositions[0];
          const dt = Math.max(16, last.time - first.time);
          const vx = ((last.x - first.x) / dt) * 16;
          const vy = ((last.y - first.y) / dt) * 16;

          const maxVelocity = 28;
          const clampedVx = Math.max(-maxVelocity, Math.min(maxVelocity, vx));
          const clampedVy = Math.max(-maxVelocity, Math.min(maxVelocity, vy));

          Body.setVelocity(draggedBody, { x: clampedVx, y: clampedVy });
          Body.setAngularVelocity(draggedBody, clampedVx * 0.015);
        }

        draggedBody = null;
        previousPositions.length = 0;
      };

      capsuleEls.forEach((el, index) => {
        const body = bodies[index];
        if (!body) return;

        const handleMouseDown = (e: MouseEvent) => {
          e.preventDefault();
          startDrag(body, e.clientX, e.clientY);
        };

        const handleTouchStart = (e: TouchEvent) => {
          if (e.touches.length === 1) {
            startDrag(body, e.touches[0].clientX, e.touches[0].clientY);
          }
        };

        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('touchstart', handleTouchStart, { passive: true });
      });

      window.addEventListener('mousemove', onPointerMove, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
      window.addEventListener('touchcancel', onPointerUp);

      windowListenersCleanup = () => {
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        window.removeEventListener('touchend', onPointerUp);
        window.removeEventListener('touchcancel', onPointerUp);
      };

      techRunner = Runner.create();
      Runner.run(techRunner, techEngine);

      const syncCapsules = () => {
        bodies.forEach((body) => {
          const el = body.el;
          if (!el) return;
          const posX = body.position.x - el.offsetWidth / 2;
          const posY = body.position.y - el.offsetHeight / 2;
          el.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${body.angle}rad)`;
          el.style.opacity = '1';
        });

        techAnimationFrame = requestAnimationFrame(syncCapsules);
      };

      syncCapsules();
    };

    const techSection = sectionRef.current;
    let techObserver: IntersectionObserver | null = null;
    let hasLeft = true;

    if (techSection) {
      techObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!techInitialized) {
                initTechnologyCapsules();
                hasLeft = false;
              } else if (hasLeft) {
                triggerDrop();
                hasLeft = false;
              }
            } else {
              hasLeft = true;
            }
          });
        },
        { threshold: 0.15 }
      );

      techObserver.observe(techSection);
    }

    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (techInitialized) {
          cleanupPhysics();
          initTechnologyCapsules();
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (techObserver) techObserver.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      cleanupPhysics();
    };
  }, []);

  return (
    <section
      id="tech-ecosystem"
      ref={sectionRef}
      className="technology-ecosystem touch-pan-y"
    >
      <div className="tech-heading-wrap">
        <h2 className="display-text">
          Creative.<span>Ideas</span> Intelligent <span>Technology</span> Real Growth.
        </h2>
        <p>
          We bring strategy, creativity, content, technology and AI together to help ambitious brands stand out, connect with their audience and grow with purpose.
        </p>
      </div>

      <div ref={stageRef} className="capsule-stage touch-pan-y">
        {CAPSULES_DATA.map((capsule) => (
          <div
            key={capsule.id}
            data-name={capsule.name}
            className={capsule.className}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={capsule.imgSrc}
              alt={capsule.name}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
