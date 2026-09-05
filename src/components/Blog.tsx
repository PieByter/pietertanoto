"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi2";
import { blogPosts } from "@/data/blog";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading
          eyebrow="Writings"
          title="Latest"
          highlight="Articles"
          subtitle="Short notes on what I'm learning and building"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}