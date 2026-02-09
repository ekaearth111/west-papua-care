import Link from "next/link";
import { Mail, Instagram, Youtube } from "lucide-react";
import { quickLinks } from "@/lib/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-forest-green)] py-16 lg:py-20">
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Tagline */}
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="text-white/80 text-base leading-relaxed whitespace-nowrap">
              Traditional indigenous governance meets marine conservation science
            </p>
            <div className="flex gap-2 mt-4 -ml-2">
              <a
                href="mailto:westpapuacare@gmail.com?subject=General%20Inquiry"
                className="p-2 text-white/70 transition-all duration-200 hover:text-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/westpapuacareorg"
                className="p-2 text-white/70 transition-all duration-200 hover:text-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@WestPapuaCare"
                className="p-2 text-white/70 transition-all duration-200 hover:text-[var(--color-burnt-orange)] hover:-translate-y-0.5"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-white/70 no-underline transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/20 text-sm">
          <p className="m-0 text-white/70">
            &copy; {currentYear} West Papua Care. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-white/70 no-underline transition-colors duration-150 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
