import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const sora = localFont({
  src: './fonts/sora-variable.woff2',
  variable: '--font-heading',
  display: 'swap',
  weight: '100 800',
});

const manrope = localFont({
  src: './fonts/manrope-variable.woff2',
  variable: '--font-body',
  display: 'swap',
  weight: '200 800',
});

export const metadata: Metadata = {
  title: 'Buzz N Beyond Innovations | Ideas Deserve To Go Beyond',
  description:
    'We help ambitious businesses build distinctive brands, create meaningful digital experiences and grow through strategy, creativity, technology and AI.',
  keywords: [
    'Buzz N Beyond Innovations',
    'Brand Strategy',
    'Creative Direction',
    'UI/UX Design',
    'Web Development',
    'AI Integrations',
    'Growth Marketing',
  ],
  openGraph: {
    title: 'Buzz N Beyond Innovations | Ideas Deserve To Go Beyond',
    description:
      'We help ambitious businesses build distinctive brands, create meaningful digital experiences and grow through strategy, creativity, technology and AI.',
    type: 'website',
  },
  icons: {
    icon: 'https://dev.buzznbeyond.com/wp-content/uploads/2025/03/Untitled-design-9-e1784613727472.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-[#F8F7F5] text-[#080B14] antialiased selection:bg-[#4D357F] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
