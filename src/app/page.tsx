// src\app\page.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const profilePic = '/Sanju-Picture.jpg';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 text-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {/* Hero Section with custom layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="relative">
            <Image
              src={profilePic}
              alt="Sanju Peramuna Arachchi"
              width={260}
              height={260}
              className="rounded-full border-4 border-white shadow-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner shadow-blue-200 opacity-20 blur-2xl"></div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight text-foreground">
              Wired Founder
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              Sanju Peramuna Arachchi
            </p>
            <p className="text-muted-foreground max-w-xl mb-6 leading-relaxed">
              Systems. Stories. Survival. Where ADHD-driven execution meets creative clarity.
              Raw lessons from real chaos, built for founders and creators who don’t fit the mold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button asChild>
                <a href="https://aenigm3Labs.com" target="_blank" rel="noopener noreferrer">
                  Visit Aenigm3 Labs
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://sanjuperamuna.online" target="_blank" rel="noopener noreferrer">
                  Read My Story
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/newsletter">Join the Newsletter</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <section className="mt-16 max-w-2xl text-left space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founder. Strategist. Mentor. As a graduate of the{' '}
              <a
                href="https://fi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Founder Institute
              </a>{' '}
              and former Venture Partner (until 2024), I’ve helped startups and creators scale with clarity —
              turning creative chaos into systems that convert.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Founder Institute Alumnus & Mentor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selected as one of only 8 out of 800 applicants to join the{' '}
              <a
                href="https://fi.co/silicon-valley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Silicon Valley Founder Institute Accelerator
              </a>. Later served as Cohort Vice President and helped other founders with product, pitch, and growth strategy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Venture Partner (2022–2024)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Supported early-stage companies in South Asia with startup growth advisory, marketing automation,
              and storytelling strategy. Focused on helping builders who operate outside the traditional mold.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Blog & Founder’s Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Raw lessons. Real experiences. If you want the unfiltered journey — the wins, losses,
              and rewiring that built this brand — read the full story.
            </p>
            <Button asChild>
              <a href="/about">Read the Founder’s Story</a>
            </Button>
          </div>
        </section>

        {/* Socials */}
        <div className="mt-12 flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://x.com/Sanju_Peramuna" target="_blank" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/sanju-peramuna-arachchi" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/sanju_peramuna" target="_blank" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t pt-6 text-sm text-muted-foreground max-w-xl mx-auto">
          <p>
            This isn’t about optimizing for likes or hustling for clout.
            It’s about sharing the mess behind building something that matters.
            Every lesson here comes from scars earned and systems created.
          </p>
        </div>
      </motion.div>
    </main>
  );
}