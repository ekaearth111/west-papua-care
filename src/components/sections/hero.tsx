"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[var(--color-forest-green-deep)] pt-16 sm:pt-20 lg:pt-36 pb-10 sm:pb-16 lg:pb-24 relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Text content - centered */}
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8 relative z-[1]">
        <div
          className={cn(
            "flex flex-col gap-6 max-w-[900px] mx-auto text-center mb-8 lg:mb-12",
            mounted && "animate-fade-in"
          )}
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-off-white)] leading-[1.2] sm:leading-[1.15] text-center">
            Protecting the Amazon of the Seas
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Through <span className="text-[var(--color-burnt-orange)]">Community Wisdom</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            and Conservation Science
          </h1>

          <p className="text-[clamp(0.938rem,2vw,1.25rem)] leading-[1.6] sm:leading-relaxed text-[rgba(255,255,255,0.9)]">
            Establishing a 250 sqkm community-led Marine Protected Area in Raja Ampat,
            Indonesia, where local communities safeguard the world&apos;s most biodiverse
            coral reef ecosystem
          </p>
        </div>

        {/* Link above image */}
        <Link
          href="/project"
          className="flex items-center justify-center gap-2 sm:gap-3 pt-4 pb-8 sm:pb-12 group"
        >
          <span className="text-[var(--color-off-white)] text-xs sm:text-sm tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            Learn About the Marine Protected Area
          </span>
          <span className="text-[var(--color-off-white)] text-lg opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            &gt;
          </span>
        </Link>

        {/* Hero Image */}
        <div
          className={cn(
            "w-full aspect-[16/9] overflow-hidden relative z-[1] rounded-xl",
            mounted && "animate-slide-in"
          )}
        >
          <Image
            src="/images/hero.jpg"
            alt="Aerial view of Raja Ampat's pristine islands and turquoise waters"
            fill
            className="object-cover brightness-95"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
