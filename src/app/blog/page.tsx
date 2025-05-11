// src\app\blog\page.tsx
import Link from 'next/link';

const posts = [
  {
    title: 'ADHD is a Superpower',
    slug: 'adhd-superpower',
    description: 'How I turned impulsive chaos into creative energy.',
    date: 'May 11, 2024',
  },
  {
    title: 'Lessons From Being a Founder',
    slug: 'founder-lessons',
    description: 'What I learned from building while broke, doubted, and driven.',
    date: 'May 10, 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-8">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-semibold hover:underline">{post.title}</h2>
          </Link>
          <p className="text-muted-foreground text-sm mb-1">{post.date}</p>
          <p className="text-muted-foreground text-sm">{post.description}</p>
        </div>
      ))}
    </div>
  );
}
