import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HiCalendar, HiClock } from "react-icons/hi2";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} — Pieter Tanoto` : "Blog — Pieter Tanoto",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="blog-post-main">
      <Link href="/blog" className="blog-back">
        ← Kembali ke Blog
      </Link>

      <div className="blog-card-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="blog-post-title">{post.title}</h1>

      <div className="blog-card-meta">
        <span>
          <HiCalendar /> {post.date}
        </span>
        <span>
          <HiClock /> {post.readTime}
        </span>
      </div>

      <div className="blog-post-body">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="blog-post-footer">
        <Link href="/blog" className="btn-outline">
          ← Artikel lainnya
        </Link>
        <Link href="/#contact" className="btn-primary">
          Hubungi Saya
        </Link>
      </div>
    </main>
  );
}