// src/app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12 flex flex-col gap-20 items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* LEFT: Text Content */}
        <div className="text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Let's Connect
          </h1>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Whether it's about AI, growth strategy, ADHD systems, or collaborating on something meaningful — book a time with me directly.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            I typically respond within 24 hours. If you need something urgent, feel free to DM me.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://x.com/Sanju_Peramuna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500">
              <Twitter className="h-5 w-5" /> Twitter
            </a>
            <a href="https://www.linkedin.com/in/sanju-peramuna-arachchi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/sanju_peramuna" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
            <a href="https://www.pinterest.com/sanju_peramuna/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-500">
              📌 Pinterest
            </a>
            <a href="https://www.youtube.com/@SanjuPeramunaArachchi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600">
              <Youtube className="h-5 w-5" /> YouTube
            </a>
            <a href="https://t.snapchat.com/5g2XG4Zs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500">
              👻 Snapchat
            </a>
          </div>

          <a
            href="https://wa.me/94770872292"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-md bg-green-500 text-white text-sm font-medium shadow hover:bg-green-600"
          >
            Message me on WhatsApp
          </a>
        </div>

        {/* RIGHT: Calendly Widget */}
        <div>
          <div
            className="calendly-inline-widget rounded-xl overflow-hidden border border-muted-foreground/20 shadow-md"
            data-url="https://calendly.com/aenigm3-labs"
            style={{ minWidth: '100%', height: '700px' }}
          ></div>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </div>
      </motion.div>

      {/* Quick contact form (placeholder for future) */}
      <section className="w-full max-w-2xl mt-10">
        <h2 className="text-xl font-semibold mb-4">Prefer to send a quick message?</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded-md bg-background" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded-md bg-background" />
          <textarea placeholder="Your Message" className="border p-2 rounded-md bg-background min-h-[120px]" />
          <button
            type="submit"
            className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 shadow"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
