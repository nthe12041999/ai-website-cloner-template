import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Our partners", href: "/partner" },
  { label: "Contact us", href: "#section-contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Condition", href: "/terms-conditions" },
  { label: "KYC & AML Policy", href: "/kyc-aml-policy" },
] as const;

const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/LeadingCards?locale=uk_UA",
    icon: "/images/social/facebook.webp",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leadingcards.media/",
    icon: "/images/social/instagram.webp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/unavailable/",
    icon: "/images/social/linkedin.webp",
  },
  {
    label: "Telegram",
    href: "https://t.me/LeadingCardsMedial",
    icon: "/images/social/telegram.webp",
  },
] as const;

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-12">
      <div className="relative mx-auto max-w-[67rem]">
        {/* Decorative vertical lines */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[#dfe4ec]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-[#dfe4ec]" aria-hidden="true" />

        {/* Top section */}
        <div className="mx-auto max-w-[58.75rem]">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Logo */}
            <Link href="/" aria-label="LeadingCards home">
              <Image
                src="/images/leading-cards.svg"
                alt="Leading Cards"
                width={196}
                height={30}
              />
            </Link>

            {/* Nav links */}
            <nav className="flex gap-6" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#4d5e80] transition-colors hover:text-[#151c28]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Decorative HR with dots */}
        <div className="relative my-8">
          <hr className="border-t border-[#dfe4ec]" />
          <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-between px-[10%]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="block h-2 w-2 rounded-full border border-[#dfe4ec] bg-white"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mx-auto max-w-[58.75rem]">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Copyright */}
            <p className="text-sm text-[#4d5e80]">
              &copy; LeadingCards 2025
            </p>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#4d5e80] transition-colors hover:text-[#151c28]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons (cc-small variant) */}
            <div className="flex items-center gap-2">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block select-none"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={32}
                    height={32}
                    className="aspect-square"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
