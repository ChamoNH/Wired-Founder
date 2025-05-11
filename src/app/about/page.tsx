// app/about/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Sanju
      </motion.h1>

      <p className="text-muted-foreground mb-6">
        I’m Sanju Peramuna Arachchi — a third-generation entrepreneur, ADHD-fueled founder,
        creative problem solver, and currently the CEO of <a href="https://aenigme.com" className="underline" target="_blank">Aenigm3 Labs</a>.
      </p>

      <p className="mb-4">
        I was born in Ragama, Sri Lanka, and raised amidst chaos, curiosity, and conflict. After
        losing my father at 13 and struggling with ADHD in a rigid school system, I dropped out at
        16. My early life veered into risky behaviors, street racing, and addiction — until I hit
        rock bottom during the COVID-19 pandemic. A failed suicide attempt led me to Buddhism,
        meditation, and a new direction.
      </p>

      <p className="mb-4">
        In 2020, I was selected for the <strong>Founder Institute Silicon Valley</strong> accelerator
        from a pool of over 800 applicants — one of only 8 graduates in the Sri Lanka cohort. I
        served as Vice President, learning under incredible mentors like Fathhi Mohamed, Fayaz
        Hudah, Jatin Kataria, and Ayami Wanasignhe. That journey became the turning point in my
        startup career.
      </p>

      <p className="mb-4">
        After graduating, I co-founded Aenigm3 Labs, a creative digital agency helping
        forward-thinking brands grow through storytelling, strategy, and results. I also led
        large-scale projects in the Rotaract movement and launched remote internship programs to
        bridge Sri Lankan youth with European mentors.
      </p>

      <p className="mb-4">
        Today, WiredFounder.com is where I share unfiltered lessons, ADHD mindset hacks,
        entrepreneurial failures, startup strategies, and how I went from chaos to clarity.
      </p>
    </div>
  );
}
