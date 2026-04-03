import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BlogPostGrid } from "@/components/BlogPostGrid";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Leading Cards",
  description:
    "Explore expert insights on digital advertising, virtual card management, campaign scaling tips, and fintech trends—only on the LeadingCards blog.",
};

export default function BlogPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "1rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
      <Navbar />
      <main>
        {/* Blog Header spacer for fixed navbar */}
        <div style={{ paddingTop: "clamp(4rem, 6vw, 8rem)" }} />
        <BlogPostGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
