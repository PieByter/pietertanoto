import Link from "next/link";
import type { Metadata } from "next";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi2";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Pieter Tanoto",
  description: "Articles and notes by Pieter Tanoto on backend development, testing, and more.",
};

export default function BlogPage() {
  return (
    <main className="blog-page-main">
      <Link href="/" className="blog-back">
        ← Kembali ke Beranda
      </Link>
      <h1 className="blog-page-title">
        Blog <span className="gradient-text">Pieter</span>
      </h1>
      <p className="blog-page-subtitle">
        Artikel singkat tentang apa yang saya pelajari dan bangun.
      </p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-list-card">
            <div className="blog-card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="blog-list-title">{post.title}</h2>
            <p className="blog-list-excerpt">{post.excerpt}</p>
            <div className="blog-card-meta">
              <span>
                <HiCalendar /> {post.date}
              </span>
              <span>
                <HiClock /> {post.readTime}
              </span>
            </div>
            <span className="blog-card-link">
              Baca artikel <HiArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}