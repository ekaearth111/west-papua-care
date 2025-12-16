"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

interface NewsCarouselProps {
  items: NewsItem[];
  className?: string;
}

const categoryColors: Record<string, string> = {
  update: "bg-[var(--color-forest-green)]",
  research: "bg-[var(--color-burnt-orange)]",
  community: "bg-blue-600",
  announcement: "bg-purple-600",
};

const categoryLabels: Record<string, string> = {
  update: "Update",
  research: "Research",
  community: "Community",
  announcement: "Announcement",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsCarousel({ items, className }: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, items.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <section className={cn("py-16 lg:py-24 bg-[var(--color-cream)]", className)}>
      <div className="max-w-[var(--max-width-content)] mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="section-label text-[var(--color-gray)]">
              [ LATEST NEWS ]
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[var(--color-charcoal)]">
              Updates from the Field
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 text-[var(--color-burnt-orange)] font-semibold hover:gap-3 transition-all"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="w-full flex-shrink-0 px-2"
                >
                  <article className="bg-white p-8 rounded-lg shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={cn(
                          "text-xs font-semibold text-white px-3 py-1 rounded-full",
                          categoryColors[item.category] || "bg-gray-500"
                        )}
                      >
                        {categoryLabels[item.category] || item.category}
                      </span>
                      <span className="text-sm text-[var(--color-gray)]">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3">
                      <Link
                        href={`/news/${item.slug}`}
                        className="hover:text-[var(--color-burnt-orange)] transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-[var(--color-gray)] mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[var(--color-burnt-orange)] font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {items.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
                aria-label="Previous news item"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--color-charcoal)]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
                aria-label="Next news item"
              >
                <ChevronRight className="w-5 h-5 text-[var(--color-charcoal)]" />
              </button>
            </>
          )}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === activeIndex
                    ? "bg-[var(--color-burnt-orange)]"
                    : "bg-[var(--color-light-gray)] hover:bg-[var(--color-gray)]"
                )}
                aria-label={`Go to news item ${index + 1}`}
              />
            ))}
          </div>
        )}

        <Link
          href="/news"
          className="md:hidden inline-flex items-center gap-2 text-[var(--color-burnt-orange)] font-semibold mt-6 hover:gap-3 transition-all"
        >
          View All News
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
