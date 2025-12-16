"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }

  function toggleDropdown(dropdown: string) {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[1020] transition-all duration-300",
        scrolled
          ? "bg-[rgba(31,39,32,0.98)] backdrop-blur-[12px] shadow-md"
          : "bg-[var(--color-forest-green-deep)]"
      )}
    >
      <div className="max-w-[var(--max-width-wide)] mx-auto px-6 lg:px-12 py-4 lg:py-6 flex items-center justify-between gap-12">
        {/* Logo */}
        <Link
          href="/"
          className="no-underline flex items-center z-10"
          aria-label="West Papua Care Home"
        >
          <Image
            src="/logo.png"
            alt="West Papua Care"
            width={120}
            height={36}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex flex-1 justify-end items-center gap-6"
          aria-label="Main navigation"
        >
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  className="font-[var(--font-family-heading)] text-sm font-medium tracking-wide text-white text-[var(--color-off-white)] bg-transparent border-none py-2 px-4 cursor-pointer transition-colors duration-300 flex items-center gap-1 whitespace-nowrap hover:text-orange-500 hover:text-[var(--color-burnt-orange)]"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[200px] bg-[var(--color-off-white)] rounded-lg shadow-lg p-2 mt-2 animate-[dropdown-appear_0.2s_ease-out]">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-2 px-4 text-sm text-[var(--color-charcoal)] no-underline rounded transition-all duration-200 hover:bg-[var(--color-cream)] hover:text-[var(--color-burnt-orange)]"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "font-[var(--font-family-heading)] text-sm font-medium tracking-wide text-white text-[var(--color-off-white)] no-underline py-2 px-4 transition-colors duration-300 whitespace-nowrap hover:text-orange-500 hover:text-[var(--color-burnt-orange)]",
                  item.isDonate &&
                    "bg-orange-600 bg-[var(--color-burnt-orange)] rounded px-6 font-semibold hover:bg-orange-700 hover:bg-[#b8580c] hover:text-white hover:text-[var(--color-off-white)]"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-0 bg-transparent border-none cursor-pointer z-10"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span
            className={cn(
              "w-full h-0.5 bg-[var(--color-off-white)] rounded transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "w-full h-0.5 bg-[var(--color-off-white)] rounded transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-full h-0.5 bg-[var(--color-off-white)] rounded transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-[var(--color-off-white)] p-8 overflow-y-auto animate-[slide-down_0.3s_ease-out]">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className="font-[var(--font-family-heading)] text-xs font-semibold tracking-widest text-[var(--color-gray)] py-2">
                    {item.label}
                  </div>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block p-4 text-lg text-[var(--color-charcoal)] no-underline rounded-lg transition-all duration-200 hover:bg-[var(--color-cream)] hover:text-[var(--color-burnt-orange)]"
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "block p-4 text-lg text-[var(--color-charcoal)] no-underline rounded-lg transition-all duration-200 hover:bg-[var(--color-cream)] hover:text-[var(--color-burnt-orange)]",
                    item.isDonate &&
                      "bg-[var(--color-burnt-orange)] text-[var(--color-off-white)] font-semibold text-center hover:bg-[#b8580c] hover:text-[var(--color-off-white)]"
                  )}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
