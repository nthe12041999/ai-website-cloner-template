"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Credit Card Tips",
  "Ads Payment",
  "Debit Cards",
  "Virtual Card",
  "Banking",
  "Payment Process",
  "Credit Card",
] as const;

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "understanding-css-grid",
    title: "Understanding CSS Grid",
    date: "November 18, 2025",
    category: "Debit Cards",
    image: "/images/blog/css-grid.jpeg",
  },
  {
    slug: "the-evolution-of-virtual-cards-how-fintech-is-redefining-online-payments",
    title:
      "The Evolution of Virtual Cards: How Fintech is Redefining Online Payments",
    date: "August 20, 2025",
    category: "Virtual Card",
    image: "/images/blog/virtual-cards-evolution.png",
  },
  {
    slug: "how-top-media-buyers-use-virtual-cards-to-scale-safely-o9i5r",
    title: "How Top Media Buyers Use Virtual Cards to Scale Safely",
    date: "September 18, 2025",
    category: "Virtual Card",
    image: "/images/blog/media-buyers-virtual-cards.png",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-post-card">
      <Link
        href={`/blogs/${post.slug}`}
        className="block"
      >
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden rounded-xl mb-4"
          style={{ paddingTop: "62.1951%" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Badge */}
        <span
          className="inline-block rounded-full text-sm font-medium"
          style={{
            backgroundColor: "#f9f5ff",
            color: "#8c3cfc",
            padding: "0.125rem 0.75rem",
          }}
        >
          {post.category}
        </span>

        {/* Title */}
        <h2
          className="mt-3 font-medium leading-tight text-[#151c28]"
          style={{
            fontSize: "clamp(1.25rem, 1.162rem + 0.3756vw, 1.5rem)",
            lineHeight: 1.28,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}
        >
          {post.title}
        </h2>

        {/* Date */}
        <p style={{ color: "#60769f" }} className="text-sm">
          {post.date}
        </p>
      </Link>
    </article>
  );
}

export function BlogPostGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      className="px-6"
      style={{
        paddingTop: "clamp(3rem, 2rem + 4vw, 6.25rem)",
        paddingBottom: "clamp(2rem, 1rem + 3vw, 4rem)",
      }}
    >
      <div className="mx-auto max-w-[71rem]">
        {/* Category Filter */}
        <div className="mb-10">
          <div
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide"
            style={{ paddingBottom: "0.25rem" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-1 text-sm font-medium transition-colors duration-200",
                  activeCategory === cat
                    ? "bg-[#8c3cfc] text-white"
                    : "bg-white text-[#4d5e80] hover:bg-[#f1f4f8]"
                )}
                style={{
                  fontSize: "clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ rowGap: "3.375rem" }}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-[#4d5e80]">
              No items found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
