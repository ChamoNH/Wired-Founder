// src/app/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Wired Founder
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Raw lessons. Creative tools. Hard truths from building with ADHD, starting over after rock bottom,
          and learning to grow something real without fitting into the startup echo chamber.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="https://aenigme.com" target="_blank" rel="noopener noreferrer">
              Visit Aenigm3 Labs
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://sanjuperamuna.online" target="_blank" rel="noopener noreferrer">
              Personal Blog
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
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
      </motion.div>
    </main>
  );
}
