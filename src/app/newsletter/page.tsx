// src\app\newsletter\page.tsx
'use client';
import EmailSignup from '@/components/EmailSignup';

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Join the Newsletter</h1>
      <p className="text-muted-foreground mb-6">
        Get ADHD-focused founder insights, lessons from real startups, and weekly mindset tools to level up.
      </p>
      <EmailSignup />
    </div>
  );
}