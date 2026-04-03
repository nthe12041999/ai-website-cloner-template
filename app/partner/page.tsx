import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PartnerPageGrid } from "@/components/PartnerPageGrid";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Partners | Leading Cards",
  description:
    "LeadingCards clients get more — our partners have lined up sweet deals for you. Trusted by the best in the niche!",
};

export default function PartnerPage() {
  return (
    <div
      className="page-wrapper"
      style={{ paddingTop: "1rem", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <Navbar />
      <main>
        {/* Spacer for fixed navbar */}
        <div style={{ paddingTop: "clamp(4rem, 6vw, 8rem)" }} />

        {/* Section Header */}
        <section className="u-spacing-inline px-6">
          <div className="mx-auto max-w-[80rem] text-center">
            <h1
              className="mx-auto mb-4 font-bold tracking-[-0.01em]"
              style={{
                fontSize: "clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)",
                lineHeight: 1.2,
                color: "#151c28",
              }}
            >
              Our charging solutions come from trusted partners
            </h1>
            <p
              className="mx-auto max-w-[40rem]"
              style={{
                fontSize: "clamp(1rem, 0.912rem + 0.3756vw, 1.25rem)",
                color: "#4d5e80",
                lineHeight: 1.5,
              }}
            >
              LeadingCards clients get more — our partners have lined up sweet
              deals for you. Trusted by the best in the niche!
            </p>
          </div>
        </section>

        <PartnerPageGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
