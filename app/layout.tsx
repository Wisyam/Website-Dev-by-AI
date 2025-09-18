import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Stellar Landing Page',
  description: 'A modern and visually stunning landing page template built with React and Tailwind CSS, showcasing a professional structure and reusable components.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-light font-sans text-dark antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
