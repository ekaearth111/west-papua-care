import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import {
  newsArticles,
  getNewsArticle,
  getAllNewsSlugs,
  formatDate,
} from "@/lib/data/news";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
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

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  // Find previous and next articles
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sortedArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;

  return (
    <>
      <PageHero
        label={categoryLabels[article.category].toUpperCase()}
        title={article.title}
        subtitle={formatDate(article.date)}
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="max-w-[800px] mx-auto">
            {/* Back link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[var(--color-burnt-orange)] font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            {/* Category badge */}
            <div className="mb-8">
              <span
                className={`text-sm font-semibold text-white px-4 py-2 rounded-full ${categoryColors[article.category]}`}
              >
                {categoryLabels[article.category]}
              </span>
            </div>

            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold text-[var(--color-charcoal)] mt-8 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                // Handle list items (simple detection)
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                  return (
                    <ul key={index} className="list-disc pl-8 mb-6 text-[var(--color-gray)]">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p
                      key={index}
                      className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6"
                    >
                      {paragraph.trim()}
                    </p>
                  );
                }
                return null;
              })}
            </article>

            {/* Navigation between articles */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-12 pt-8 border-t border-[var(--color-gray)]/20">
              {prevArticle ? (
                <Link
                  href={`/news/${prevArticle.slug}`}
                  className="flex items-center gap-2 text-[var(--color-gray)] hover:text-[var(--color-burnt-orange)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Previous: {prevArticle.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/news/${nextArticle.slug}`}
                  className="flex items-center gap-2 text-[var(--color-gray)] hover:text-[var(--color-burnt-orange)] transition-colors sm:text-right"
                >
                  <span className="text-sm">Next: {nextArticle.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* CTA */}
            <div className="bg-[var(--color-cream)] p-12 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-semibold text-[var(--color-charcoal)] mb-4">
                Support Our Work
              </h3>
              <p className="text-lg text-[var(--color-gray)] mb-6">
                Help us continue protecting the Amazon of the Seas through
                community-led conservation.
              </p>
              <Button variant="cta" size="md" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
