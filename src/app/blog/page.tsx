import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';
import { format } from 'date-fns';

export default function BlogPage() {
  const posts = allBlogs.sort((a: any, b: any) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {posts.map((post: any) => (
        <div key={post.slug} className="mb-8">
          <Link href={post.url}>
            <h2 className="text-2xl font-semibold hover:underline">{post.title}</h2>
          </Link>
          <p className="text-muted-foreground text-sm mb-1">{format(new Date(post.date), 'MMM dd, yyyy')}</p>
          <p className="text-muted-foreground text-sm">{post.description}</p>
        </div>
      ))}
    </div>
  );
}
