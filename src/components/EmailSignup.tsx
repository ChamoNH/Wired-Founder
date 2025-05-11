// src\components\EmailSignup.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleSubmit = async () => {
    setStatus('loading');
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    if (res.ok) setStatus('done');
    else setStatus('idle');
  };

  return (
    <div className="mt-10 bg-muted rounded-xl p-6 max-w-lg mx-auto text-center">
      <h3 className="text-lg font-bold">Join the Wired Founder newsletter</h3>
      <p className="text-sm text-muted-foreground mt-1">Get ADHD-focused founder insights weekly</p>
      <input
        className="mt-4 px-4 py-2 w-full rounded-md border"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="mt-4 w-full" onClick={handleSubmit} disabled={status === 'loading'}>
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {status === 'done' && <p className="mt-2 text-green-600">You're in!</p>}
    </div>
  );
}
