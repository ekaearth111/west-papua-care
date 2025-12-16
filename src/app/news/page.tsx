import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { newsArticles, formatDate } from "@/lib/data/news";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Stay updated on West Papua Care's progress in establishing community-led marine protection in Raja Ampat.",
};

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

export default function NewsPage() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        label="NEWS & UPDATES"
        title="Latest from the Field"
        subtitle="Progress updates, research findings, and community stories from our work in Raja Ampat"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-[var(--color-cream)] rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${categoryColors[article.category]}`}
                    >
                      {categoryLabels[article.category]}
                    </span>
                    <span className="text-sm text-[var(--color-gray)]">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-3 leading-tight">
                    <Link
                      href={`/news/${article.slug}`}
                      className="hover:text-[var(--color-burnt-orange)] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-[var(--color-gray)] mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-burnt-orange)] font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {sortedArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[var(--color-gray)]">
                No news articles yet. Check back soon for updates on our work.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
