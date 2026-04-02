"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import "../app/globals.css";

const navLinks = [
  { label: "Our Partners", href: "/partner" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "#section-contact" },
] as const;

const languages = [
  { code: "en", label: "English", short: "ENG" },
  { code: "uk", label: "Ukrainian", short: "UKR" },
  { code: "ru", label: "Russian", short: "RUS" },
  { code: "es", label: "Spanish", short: "ESP" },
] as const;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<(typeof languages)[number]>(
    languages[0]
  );
  const langRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar u-width-full u-spacing-inline">
      <div className="container cc-1136">
        {/* Center: Nav Links (desktop only) */}
        <div className="navbar_wrapper">
          <div className="navbar_inner">
            <nav role="navigation" className="navbar_nav w-nav-menu">
              <ul className="navbar_nav_list u-list-unstyled">
                <li>
                  <a href="/partner" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Our Partners</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/partner" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Blog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/partner" className="navbar_nav_link w-inline-block">
                    <div className="navbar_link_text-wrap">
                      <span className="navbar_link_text">Contact us</span>
                    </div>
                  </a>
                </li>
              </ul>
              {/* {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl leading-none navbar_nav_link w-inline-block"
                  style={{ color: "#f1f4f8" }}
                >
                  <span
                    className="inline-block overflow-hidden"
                    style={{ paddingBottom: "3px", lineHeight: 1 }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))} */}
            </nav>

            {/* Left: Logo */}
            <Link href="/" className="navbar_brand w-inline-block w--current">
              <Image
                src="/images/leading-cards.svg"
                alt="Leading Cards"
                width={180}
                height={40}
                className="h-auto"
                priority
              />
            </Link>


            {/* Right: Auth Buttons + Language (desktop) / Hamburger (mobile) */}
            <div className="navbar_nav_buttons cc-mobile">

              {/* Auth Buttons (desktop only) */}
              <div className="navbar_menu-icon w-nav-button">
                <button
                  type="button"
                  className="button-primary cc-secondary u-hide-tablet w-inline-block">
                  Sign in
                </button>
                <button
                  type="button"
                  className="button-primary cc-ghost u-hide-tablet w-inline-block">
                  Sign up
                </button>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                className="xl:hidden p-2 transition-colors duration-200 hover:bg-white/10 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <Image
                  src="/images/menu.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden mt-4 mx-auto rounded-xl border border-white/10 bg-[#1a1a2e]/95 p-6 backdrop-blur-md"
          style={{ maxWidth: "71rem" }}
        >
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-lg rounded-lg transition-colors duration-150 hover:bg-white/10"
                style={{ color: "#f1f4f8" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setSelectedLang(lang)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm transition-colors duration-150",
                  selectedLang.code === lang.code
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/60 hover:bg-white/10 hover:text-white/80"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              className="w-full rounded-lg py-3 px-5 text-lg transition-colors duration-200 hover:bg-white/10 button-primary cc-secondary"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#f1f4f8",
              }}
            >
              Sign in
            </button>
            <button
              type="button"
              className="w-full rounded-lg py-3 px-5 text-lg transition-colors duration-200 hover:bg-white/20 button-primary cc-ghost"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#f1f4f8",
              }}
            >
              Sign up
            </button>
          </div>


        </div>
      )}
    </div>
  );
}
