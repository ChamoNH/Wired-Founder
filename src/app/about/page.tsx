// src/app/about/page.tsx
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
        Behind Wired Founder
      </motion.h1>

      <p className="text-muted-foreground mb-6">
        WiredFounder is built on lived experience — grounded in adversity, shaped by real struggle,
        and focused on meaningful impact through technology and creative systems. It’s a space for
        people who don’t always fit the mold, but build anyway.
      </p>

      <p className="mb-4">
        Born in Ragama, Sri Lanka, and raised in the aftermath of personal loss, the founder’s early life
        was filled with friction — bouncing between schools, dealing with undiagnosed ADHD, and navigating
        a rigid education system. By 16, school was over. By 17, chaos had taken over — addiction, street racing,
        and reckless decisions. Then came the crash: COVID-19, isolation, and a failed suicide attempt.
      </p>

      <p className="mb-4">
        What followed wasn’t a clean pivot — it was slow. Meditation. Buddhism. Reflection. Rebuilding.
        That journey led to a cohort of just 8 selected out of 800 for the Founder Institute Silicon Valley accelerator.
        It led to launching Aenigm3 Labs. And most importantly, it led to a deeper understanding of how creativity,
        mental health, and business intersect.
      </p>

      <p className="mb-4">
        Through international collaborations, startup leadership, and community campaigns, the path began to align:
        helping brands grow through strategy and storytelling. But more than that, helping individuals reclaim their edge —
        especially those who’ve been told they’re too much, too different, or too chaotic.
      </p>

      <p className="mb-4">
        This isn’t about hustle porn or empty inspiration. WiredFounder is a documentation of the in-between —
        the broken systems, the inner rewiring, the founder psychology, and the tools that help turn chaos into clarity.
      </p>
    </div>
  );
}
