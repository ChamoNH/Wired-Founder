// app/company/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function CompanyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Aenigm3 Labs
      </motion.h1>

      <p className="text-muted-foreground mb-6">
        Aenigm3 Labs is a Sri Lankan creative and growth agency co-founded in December 2022 by
        <strong>Sanju Peramuna</strong>, <strong>Thariq Hamad</strong>, and <strong>Chamo Hewawasam</strong>.
        Born from frustration with shallow digital marketing and fake ROI promises, Aenigm3 was built to solve real growth problems
        through strategy, storytelling, and precision execution.
      </p>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-2">🧠 Our Mission</motion.h2>
      <p className="mb-4">
        To help early-stage brands, startups, and personal brands craft authentic narratives and turn ideas into impact through digital strategy,
        creativity, and AI-enhanced systems.
      </p>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-2">🎯 Founders</motion.h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Sanju Peramuna Arachchi</strong> — CEO, Visionary, and Branding Strategist. Ex-Founder Institute VP. Known for ADHD-fueled execution and real-world wisdom.</li>
        <li><strong>Thariq Hamad</strong> — Co-Founder & Club President of Rotaract Pan Colombo. Strategic networker and community builder.</li>
        <li><strong>Chamo Hewawasam</strong> — Co-Founder, creative thinker, and execution driver in brand development.</li>
      </ul>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-2">🌍 Our Work Culture</motion.h2>
      <ul className="list-disc ml-6 mb-4">
        <li>No bureaucracy. No fluff. Just results.</li>
        <li>We prioritize growth over vanity metrics.</li>
        <li>Our remote team spans Sri Lanka, Australia, Malaysia, and Europe.</li>
        <li>We bet on personalities over CVs.</li>
        <li>We believe passion + process beats raw talent alone.</li>
      </ul>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-2">🚀 Services</motion.h2>
      <ul className="list-disc ml-6 mb-4">
        <li>5-day Design Sprint workshops</li>
        <li>Founder-led Personal Branding</li>
        <li>Content strategy + storytelling</li>
        <li>Full-funnel marketing strategy (paid + organic)</li>
        <li>High-performance web design & landing page CRO</li>
      </ul>

      <p className="mt-8">
        At Aenigm3 Labs, we believe in adding real value. If your business is ready to grow, we’re
        ready to help you build it — not just promote it.
      </p>
    </div>
  );
}
