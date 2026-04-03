import Image from "next/image";

const ctaSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/86950206/",
    icon: "/images/social/linkedin.webp",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leadingcards.media/",
    icon: "/images/social/instagram.webp",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/LeadingCards?locale=uk_UA",
    icon: "/images/social/facebook.webp",
  },
  {
    label: "Telegram",
    href: "https://t.me/+qXQldWDNab0yNWJi",
    icon: "/images/social/telegram.webp",
  },
] as const;

export function ContactSection() {
  return (
    <section id="section-contact" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[67.5rem]">
        {/* Still Have Questions Card */}
        <div
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            borderRadius: "clamp(1rem, 0.6923rem + 1.3138vw, 1.7rem)",
            backgroundImage: "url(/images/still-have-questions-bg.avif)",
          }}
        >
          <div className="flex flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:px-[6.25rem] md:py-[3.25rem] md:text-left">
            <h2
              className="heading-h6 text-[#151c28]"
            >
              Still have questions?
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="https://api.whatsapp.com/send/?phone=15144189871&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label="Contact us on WhatsApp"
                >
                  <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp"
                    width={44}
                    height={44}
                  />
                </a>
                <a
                  href="https://t.me/LeadingCards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label="Contact us on Telegram"
                >
                  <Image
                    src="/images/social/telegram.webp"
                    alt="Telegram"
                    width={44}
                    height={44}
                  />
                </a>
              </div>

              <a
                href="https://t.me/m/Krq-iPe7OWVk"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary cc-black inline-flex items-center justify-center font-medium"
                style={{
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                }}
              >
                <span>Contact us</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Card - Social Links */}
        <div className="mt-8">
          <div
            className="cta-dot-pattern relative overflow-hidden rounded-2xl bg-[#1a0a2e] px-6 py-10 text-center md:px-10 md:py-12"
            style={{
              backgroundImage: "radial-gradient(circle, #8f65ac 1.5px, transparent 0)",
              backgroundSize: "7.5px 7.5px",
              backgroundPosition: "left bottom",
            }}
          >
            {/* Mask overlay for radial fade from center */}
            <div
              className="pointer-events-none absolute inset-0 bg-[#1a0a2e]"
              aria-hidden="true"
              style={{
                maskImage: "radial-gradient(circle at 50% 0%, transparent 0, #000 16%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 0%, transparent 0, #000 16%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Logomark */}
              <Image
                src="/images/logomark.svg"
                alt="Leading Cards"
                width={60}
                height={60}
                className="aspect-square"
              />

              {/* Title */}
              <h2 className="heading-h3 text-white">
                Unlock exclusive perks! Subscribe &amp; Supercharge your ad spend
              </h2>

              {/* Social Icons */}
              <ul className="flex items-center justify-center gap-4 list-none p-0 m-0">
                {ctaSocialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-card_list_link inline-block"
                      aria-label={social.label}
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={50}
                        height={50}
                        className="cta-card_list_image aspect-square transition-transform duration-300 hover:-translate-y-[10%] hover:scale-[1.2]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
