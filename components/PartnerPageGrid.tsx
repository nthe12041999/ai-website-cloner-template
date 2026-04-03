"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface PartnerData {
  id: number;
  name: string;
  logo: string;
  popupLogo: string;
  category: string;
  description: string;
  features: string[];
  promoCode: string;
  promoNote: string;
  ctaUrl: string;
  ctaText: string;
}

const partners: PartnerData[] = [
  {
    id: 1,
    name: "MyLead",
    logo: "/images/partners/mylead-logo.png",
    popupLogo: "/images/partners/mylead-popup-logo.png",
    category: "Affiliate Network",
    description:
      "MyLead is an earning platform tested by hundreds of thousands of publishers. It\u2019s known for its individual approach to any affiliate who is willing to maximize their profits with advanced affiliate marketing. Beside over 4300 affiliate programs, MyLead\u2019s support team is always ready to prepare additional, adjusted offers for experienced users and anything that will help them earn more. Free affiliate tools including four types of Content Lockers, a link masking system and smartlink offers are waiting to be discovered and used for effective affiliate promotion.",
    features: [
      "over 4300 affiliate programs in the most profitable verticals",
      "about 30 smartlink offers",
      "free knowledge resources (industry blog, YouTube channel, ebooks)",
      "free affiliate tools (Content Lockers, link masking system)",
      "payouts in PayPal, Revolut, Skrill, Qiwi, Bitcoin, Tether, and more",
      "exclusive bonuses for users.",
    ],
    promoCode: "Lsiklh",
    promoNote:
      "+10% to generated leads for 48 hours from the moment of code activation",
    ctaUrl: "https://mylead.global/en",
    ctaText: "Get bonus",
  },
  {
    id: 2,
    name: "Magic Click",
    logo: "/images/partners/magic-click-logo.png",
    popupLogo: "/images/partners/magic-click-popup-logo.png",
    category: "Tools",
    description: "",
    features: [],
    promoCode: "LeadingClick",
    promoNote:
      "Write the LeadingClick promo code when registering in the affiliate network and get 5% on your first payout.",
    ctaUrl:
      "https://panel.magicclick.partners/login?utm_source=leadingcards&utm_medium=partners&utm_campaign=cross",
    ctaText: "Get bonus",
  },
  {
    id: 3,
    name: "Keitaro",
    logo: "/images/partners/keitaro-logo.png",
    popupLogo: "/images/partners/keitaro-popup-logo.png",
    category: "Traffic Source",
    description:
      "Keeping track of all your data, especially when dealing with a variety of traffic - this is exactly what every marketer needs. Having access to a platform that allows you to simply manage and track all your data can mean the difference between campaign success and failure. This is exactly where Keitaro comes in to play.",
    features: [],
    promoCode: "LEADINGCARDS",
    promoNote:
      "20% discount on the first purchase of any license for up to 3 months",
    ctaUrl: "https://keitaro.io/en/?utm_source=leadingcards",
    ctaText: "Get bonus",
  },
  {
    id: 4,
    name: "Multilogin",
    logo: "/images/partners/multilogin-logo.png",
    popupLogo: "/images/partners/multilogin-popup-logo.png",
    category: "Tools",
    description:
      "Being the authority of browser fingerprint industry since 2016, Multilogin provides stable virtual browser profiles with customizable, native browser fingerprints. Harness the power of Multilogin to scale your business far beyond what you thought possible. Break free of the restrictions of physical devices and ditch unreliable virtual machines for secure virtual browser profiles \u2013 and see account bans plummet and your revenue soar.",
    features: [],
    promoCode: "LEADML",
    promoNote:
      "New Multilogin users will get 50% off their purchase in the second month and LeadingAds gets the same value credited to your Multilogin account.",
    ctaUrl:
      "https://multilogin.com/pricing/?utm_source=referrer&utm_medium=website&utm_campaign=leadingads_2022",
    ctaText: "Get bonus",
  },
  {
    id: 5,
    name: "Aivix",
    logo: "/images/partners/aivix-logo.png",
    popupLogo: "/images/partners/aivix-popup-logo.png",
    category: "Affiliate Network",
    description:
      "Aivix is an affiliate program that works only with direct and verified advertisers in the financial vertical. With over five years of experience in CPA marketing, Aivix has gained thousands of dedicated partners from all over the world who can count on high conversions and the best conditions in the market.",
    features: [],
    promoCode: "LeadingCards",
    promoNote:
      "to your manager and get +100$ CPA rate boost for the first month",
    ctaUrl: "https://aivix.com/blog/",
    ctaText: "Get bonus",
  },
  {
    id: 6,
    name: "AdGaming",
    logo: "/images/partners/adgaming-logo.png",
    popupLogo: "/images/partners/adgaming-popup-logo.png",
    category: "Affiliate Network",
    description:
      "AdGaming is an international CPA network that offers more than 200 offers for gambling and betting verticals, including exclusive offers from advertisers.",
    features: [],
    promoCode: "LeadingCards",
    promoNote:
      "Enter promo code and get +30$ to receive for registration from AdGaming",
    ctaUrl: "https://adgaming.biz/",
    ctaText: "Get bonus",
  },
  {
    id: 7,
    name: "MGID",
    logo: "/images/partners/mgid-logo.png",
    popupLogo: "/images/partners/mgid-popup-logo.png",
    category: "Affiliate Network",
    description:
      "MGID is the global advertising platform for Native, Video, and Display ads that reach unique local audiences at scale with privacy-first technology powered by AI. MGID means 25 thousand trusted publishers, 200 billion monthly ad impressions, 900M+ unique visitors monthly, and more than 750 employees who speak 70 languages.",
    features: [],
    promoCode: "",
    promoNote: "",
    ctaUrl:
      "https://www.mgid.com/signup?hashManager=9a5db36de6afebc6ebefd9ac9ec88ab5",
    ctaText: "Get bonus",
  },
  {
    id: 8,
    name: "PrimeAds",
    logo: "/images/partners/primeads-logo-v2.png",
    popupLogo: "/images/partners/primeads-popup-logo-v2.png",
    category: "Affiliate Network",
    description:
      "Global Affiliate Network for web 3.0 and crypto projects. Join the network as a publisher or advertiser and access a global platform that\u2019s set up for your success.",
    features: [],
    promoCode: "LeadingCards",
    promoNote:
      "to get +25% to your commission in the exclusive PrimeXBT revenue share offer",
    ctaUrl: "https://primeads.io/",
    ctaText: "Get bonus",
  },
  {
    id: 9,
    name: "Admobispy",
    logo: "/images/partners/admobispy-logo-v2.png",
    popupLogo: "/images/partners/admobispy-popup-logo-v2.png",
    category: "Tools",
    description:
      "Admobispy it\u2019s a tool for monitoring and analyzing mobile advertising, popup advertising, myTarger and Google advertising. Daily replenishment of creatives, transit pages, landing pages and sites. Learn all secrets of winning combinations of your competitors, find the best traffic sources, browsers and devices for your own successful advertising campaigns. Cover 100+ geos!",
    features: [],
    promoCode: "LeadingCards",
    promoNote:
      "LeadingCards -30% OFF: powerful analysis competitors ads in mobile advertising, myTarget, Google Adwords and Popups.",
    ctaUrl: "https://admobispy.com/login",
    ctaText: "Get bonus",
  },
  {
    id: 10,
    name: "ClickAdilla",
    logo: "/images/partners/clickadilla-logo-v2.png",
    popupLogo: "/images/partners/clickadilla-popup-logo-v2.png",
    category: "Traffic Source",
    description:
      "ClickAdilla is a high-technology self-serve ad network platform that provides quality adult and mainstream traffic in all major verticals: Dating, Video, Sweepstakes, Nutra, Betting, Gaming, and many others. The premium traffic sources of ClickAdilla come from the most visited websites on the Internet. Try ClickAdilla and make a step into the next generation of advertising industry services.",
    features: [],
    promoCode: "LEADINGCARDS20",
    promoNote: "The promo code is active till the end of 2023.",
    ctaUrl:
      "https://app.clickadilla.com/register/?ref=9iBwTZBT&utm_source=promo&utm_medium=LeadingCards",
    ctaText: "Get bonus",
  },
  {
    id: 11,
    name: "Everad",
    logo: "/images/partners/everad-logo-v2.png",
    popupLogo: "/images/partners/everad-popup-logo-v2.png",
    category: "Affiliate Network",
    description:
      "Everad \u2014 is a direct nutra advertiser with its own R&D, in-house offers, CPA Network, call centers and delivery. Thanks to our expertise in nutra vertical and control of all business processes our offers and promo assets demonstrate top performance on every stage.",
    features: [],
    promoCode: "Hi! I\u2019m from Leading Cards",
    promoNote:
      "to your manager and get additional +5$ for the best Everad offers and top GEOs!",
    ctaUrl:
      "https://everad.com/?utm_source=cross-promo--LeadingCards-dashboard",
    ctaText: "Get bonus",
  },
  {
    id: 12,
    name: "ADxAD",
    logo: "/images/partners/adxad-logo-v2.png",
    popupLogo: "/images/partners/adxad-popup-logo-v2.png",
    category: "Traffic Source",
    description:
      "ADxAD provides traffic for several mainstream verticals: Dating, Gambling, Gaming, Nutra, Betting, Crypto and others. Their managers take a personalized approach to all customers and help optimize your campaigns.",
    features: [],
    promoCode: "LEADINGCARDS5",
    promoNote: "when you sign up and you\u2019ll get your bonus.",
    ctaUrl:
      "https://td.adxad.com/auth/login?return=%2Fdesk%2Fcampaigns%3Futm_source%3Dleadingcards%26utm_medium%3Dpr%26utm_campaign%3D042023%26lang%3Den&lang=en",
    ctaText: "Get bonus",
  },
  {
    id: 13,
    name: "Mostbet Partners",
    logo: "/images/partners/mostbet-logo-v2.png",
    popupLogo: "/images/partners/mostbet-popup-logo-v2.png",
    category: "Affiliate Network",
    description:
      "Mostbet Partners is the official affiliate program of the betting company and online casino Mostbet.",
    features: [],
    promoCode: "leadingcards",
    promoNote:
      "during registration and get 200 bonus points in Mostbet Partners Store!",
    ctaUrl: "https://mostbet.partners/?utm_source=leadingcards",
    ctaText: "Get bonus",
  },
  {
    id: 14,
    name: "AdsPower",
    logo: "/images/partners/adspower-logo-v2.png",
    popupLogo: "/images/partners/adspower-popup-logo-v2.png",
    category: "Tools",
    description:
      "AdsPower is an antidetect browser for traffic arbitrage/affiliate marketing. With native fingerprints, it masks your real identity and allows you to run thousands of accounts without bans, while built-in automation tools complete any routine tasks for you.",
    features: [],
    promoCode: "Leadingcards",
    promoNote: "",
    ctaUrl: "https://www.adspower.com/?source=LeadingCards",
    ctaText: "Get bonus",
  },
  {
    id: 15,
    name: "Dolphin Anty",
    logo: "/images/partners/dolphin-logo-v2.png",
    popupLogo: "/images/partners/dolphin-popup-logo-v2.png",
    category: "Tools",
    description:
      "Dolphin Anty is the #1 anti-detect browser according to Affiliate Space Awards by Conversion Club. So far, it\u2019s the best tool for affiliate marketing and traffic arbitrage that allows you to manage multiple social media accounts without getting blocked or flagged.",
    features: [],
    promoCode: "Leadingcards",
    promoNote: "Get 20% off",
    ctaUrl:
      "https://dolphin-anty.com/?utm_source=bloger&utm_medium=cpc&utm_campaign=leadingcards&utm_content=leadingcardsweb",
    ctaText: "Get bonus",
  },
  {
    id: 16,
    name: "Octo Browser",
    logo: "/images/partners/octobrowser-1-v2.png",
    popupLogo: "/images/partners/octobrowser-2-v2.png",
    category: "",
    description:
      "Octo Browser is a secure and efficient anti-detect browser for multi-accounting on any platform using a single device. Octo Browser offers all the convenient and up-to-date tools for any multi-accounting task.",
    features: [],
    promoCode: "LEADINGCARDS30",
    promoNote: "30% off your first purchase of any subscription",
    ctaUrl: "https://octobrowser.net/",
    ctaText: "Get bonus",
  },
];

const categories = ["All", "Tools", "Affiliate Network", "Traffic Source"];

function PartnerModal({
  partner,
  onClose,
}: {
  partner: PartnerData;
  onClose: () => void;
}) {
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      style={{ background: "#1804257a" }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${partner.name} partner details`}
    >
      <div
        className="relative w-full overflow-y-auto bg-white"
        style={{
          borderRadius: "1.5rem",
          maxWidth: "50rem",
          padding: "clamp(1.5rem, 1rem + 2vw, 3.75rem)",
          maxHeight: "85dvh",
        }}
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <Image
            src={partner.popupLogo}
            alt={partner.name}
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="flex-shrink-0 cursor-pointer p-1 transition-opacity hover:opacity-70"
            aria-label="Close modal"
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.96486 22.6397C6.74319 22.6397 6.52152 22.558 6.34652 22.383C6.00819 22.0447 6.00819 21.4847 6.34652 21.1464L20.3463 7.07785C20.6847 6.73952 21.2447 6.74024 21.583 7.07858C21.9213 7.41691 21.9213 7.97618 21.583 8.31452L7.58319 22.383C7.41986 22.558 7.18652 22.6397 6.96486 22.6397Z"
                fill="currentColor"
              />
              <path
                d="M20.9994 22.6052C20.7777 22.6052 20.5561 22.5236 20.3811 22.3486L6.34457 8.38446C6.00624 8.04613 6.00624 7.48613 6.34457 7.14779C6.6829 6.80946 7.2429 6.80946 7.58124 7.14779L21.6177 21.1119C21.9561 21.4502 21.9561 22.0102 21.6177 22.3486C21.4427 22.5236 21.2211 22.6052 20.9994 22.6052Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Description */}
        {partner.description && (
          <div
            className="mb-6"
            style={{ color: "#354565", lineHeight: 1.7, fontSize: "15px" }}
          >
            <p>{partner.description}</p>
          </div>
        )}

        {/* Features */}
        {partner.features.length > 0 && (
          <ul
            className="mb-6 list-disc pl-5"
            style={{ color: "#354565", lineHeight: 1.7, fontSize: "15px" }}
          >
            {partner.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}

        {/* CTA Area */}
        <div
          className="flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
          style={{ backgroundColor: "#f7f7f7" }}
        >
          <div>
            {partner.promoCode && (
              <div className="mb-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "#4d5e80" }}
                >
                  Promo code:
                </span>{" "}
                <span
                  className="font-semibold"
                  style={{ color: "#151c28", fontSize: "15px" }}
                >
                  {partner.promoCode}
                </span>
              </div>
            )}
            {partner.promoNote && (
              <p className="text-sm" style={{ color: "#4d5e80" }}>
                {partner.promoNote}
              </p>
            )}
          </div>

          <a
            href={partner.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary cc-popup inline-flex flex-shrink-0 items-center justify-center"
          >
            <span>{partner.ctaText}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function PartnerPageGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(
    null
  );

  const filteredPartners = useMemo(() => {
    return partners.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section
        className="u-spacing-inline"
        style={{
          paddingTop: "clamp(2rem, 1rem + 3vw, 4rem)",
          paddingBottom: "clamp(2rem, 1rem + 3vw, 4rem)",
        }}
      >
        <div className="mx-auto max-w-[80rem]">
          {/* Filter + Search Row */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`blog-category-item flex-shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-1 text-sm font-medium transition-colors duration-200 ${
                    activeCategory === cat
                      ? "is-list-active bg-[#8c3cfc] text-white"
                      : "text-[#4d5e80] hover:bg-[#f1f4f8]"
                  }`}
                  style={{
                    fontSize:
                      "clamp(0.875rem, 0.787rem + 0.3756vw, 1.125rem)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Image
                src="/images/search-normal.png"
                alt=""
                width={20}
                height={20}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border py-2 pr-4 pl-10 text-sm outline-none transition-colors md:w-64"
                style={{
                  borderColor: "#e5eaef",
                  color: "#151c28",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#8c3cfc";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e5eaef";
                }}
              />
            </div>
          </div>

          {/* Partners Grid */}
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filteredPartners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner)}
                  className="partner-card flex cursor-pointer items-center justify-center overflow-hidden rounded-xl transition-colors duration-300"
                  style={{
                    backgroundColor: "#f0f0f0",
                    aspectRatio: "16 / 10",
                    padding: "clamp(1rem, 0.5rem + 1.5vw, 2rem)",
                  }}
                  aria-label={`View ${partner.name} partner details`}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="h-auto max-h-[3.5rem] w-auto max-w-full object-contain select-none"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#bfc8d9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <p
                className="mt-4 text-lg"
                style={{ color: "#4d5e80" }}
              >
                No items found.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partner Modal */}
      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      )}
    </>
  );
}
