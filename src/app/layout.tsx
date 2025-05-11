// src\app\layout.tsx
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/ui/Navbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wired Founder | Sanju Peramuna',
  description:
    'WiredFounder.com — the official personal brand of Sanju Peramuna Arachchi. ADHD-fueled founder, startup builder, and the creative mind behind Aenigm3 Labs.',
  metadataBase: new URL('https://wiredfounder.com'),
  openGraph: {
    title: 'Wired Founder | Sanju Peramuna',
    description:
      'ADHD-powered founder & builder of Aenigm3 Labs. Lessons, mindset, and tools from Sanju’s journey building from chaos to clarity.',
    url: 'https://wiredfounder.com',
    siteName: 'WiredFounder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wired Founder | Sanju Peramuna',
    description:
      'Founder insights, ADHD lessons, and creative systems by Sanju Peramuna.',
    creator: '@Sanju_Peramuna',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen bg-background font-sans antialiased')}>
        <Navbar />
        {children}</body>
    </html>
  );
}