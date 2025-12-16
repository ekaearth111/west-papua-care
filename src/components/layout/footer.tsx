"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Youtube } from "lucide-react";
import { quickLinks, getInvolvedLinks } from "@/lib/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage("Thank you for subscribing!");
    setEmail("");
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitMessage("");
    }, 3000);
  }

  return (
    <footer className="bg-[#1A5F7A] bg-[var(--color-forest-green)] text-white/80 text-[rgba(255,255,255,0.8)] py-16 lg:py-24 border-t border-white/10 border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="West Papua Care"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-lg text-white text-[var(--color-off-white)] max-w-xs leading-relaxed">
              Traditional indigenous governance meets conservation science
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="mailto:westpapuacare@gmail.com"
                className="flex items-center justify-center w-10 h-10 bg-white/5 bg-[rgba(255,255,255,0.05)] border border-white/20 border-[rgba(255,255,255,0.2)] rounded-lg text-white text-[var(--color-off-white)] no-underline transition-all duration-250 hover:bg-[#D3640F] hover:bg-[var(--color-burnt-orange)] hover:border-[#D3640F] hover:border-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/westpapuacareorg"
                className="flex items-center justify-center w-10 h-10 bg-white/5 bg-[rgba(255,255,255,0.05)] border border-white/20 border-[rgba(255,255,255,0.2)] rounded-lg text-white text-[var(--color-off-white)] no-underline transition-all duration-250 hover:bg-[#D3640F] hover:bg-[var(--color-burnt-orange)] hover:border-[#D3640F] hover:border-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@WestPapuaCare"
                className="flex items-center justify-center w-10 h-10 bg-white/5 bg-[rgba(255,255,255,0.05)] border border-white/20 border-[rgba(255,255,255,0.2)] rounded-lg text-white text-[var(--color-off-white)] no-underline transition-all duration-250 hover:bg-[#D3640F] hover:bg-[var(--color-burnt-orange)] hover:border-[#D3640F] hover:border-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[var(--color-off-white)] mb-4">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.href} className="m-0">
                  <Link
                    href={link.href}
                    className="text-white/70 text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-150 text-lg hover:text-white hover:text-[var(--color-off-white)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-[var(--color-off-white)] mb-4">
              Get Involved
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {getInvolvedLinks.map((link) => (
                <li key={link.href} className="m-0">
                  <Link
                    href={link.href}
                    className="text-white/70 text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-150 text-lg hover:text-white hover:text-[var(--color-off-white)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate & Newsletter */}
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-block py-4 px-12 bg-[#D3640F] bg-[var(--color-burnt-orange)] text-white text-[var(--color-off-white)] font-[var(--font-family-heading)] text-lg font-semibold no-underline rounded transition-all duration-150 text-center hover:bg-[#b8580c] hover:bg-[var(--color-burnt-orange-dark)] hover:-translate-y-0.5"
            >
              Donate
            </Link>
            <div className="mt-8">
              <h5 className="text-white text-[var(--color-off-white)] mb-4">
                Newsletter
              </h5>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col md:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 py-2 px-4 border border-white/20 border-[rgba(255,255,255,0.2)] rounded bg-white/5 bg-[rgba(255,255,255,0.05)] text-white text-[var(--color-off-white)] font-[var(--font-family-sans)] text-lg placeholder:text-white/40 placeholder:text-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#D3640F] focus:border-[var(--color-burnt-orange)] focus:bg-white/10 focus:bg-[rgba(255,255,255,0.08)]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-4 bg-[#D3640F] bg-[var(--color-burnt-orange)] text-white text-[var(--color-off-white)] border-none rounded font-[var(--font-family-heading)] text-lg font-semibold cursor-pointer transition-all duration-150 hover:not-disabled:bg-[#b8580c] hover:not-disabled:bg-[var(--color-burnt-orange-dark)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {submitMessage && (
                <p className="mt-2 text-lg text-[#D3640F] text-[var(--color-burnt-orange)]">
                  {submitMessage}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between pt-8 border-t border-white/20 border-[rgba(255,255,255,0.2)] text-center md:text-left text-lg">
          <p className="m-0 text-white text-[var(--color-off-white)]">
            &copy; {currentYear} West Papua Care. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Link
              href="/privacy"
              className="text-white/70 text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-150 hover:text-white hover:text-[var(--color-off-white)]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
