import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "West Papua Care privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="LEGAL"
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="max-w-[800px] mx-auto prose prose-lg">
            <p className="text-sm text-[var(--color-gray)] mb-8">
              Last updated: December 2024
            </p>

            <h2 className="mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              West Papua Care (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information when you visit our website or interact with
              our organization.
            </p>

            <h2 className="mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-8 mb-6 text-[var(--color-gray)]">
              <li className="mb-2">
                <strong>Contact Information:</strong> Name, email address, and
                other details you provide when contacting us or subscribing to
                our newsletter.
              </li>
              <li className="mb-2">
                <strong>Donation Information:</strong> Payment details and
                billing information when you make a donation (processed securely
                by third-party payment processors).
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> Information about how you use our
                website, including pages visited and time spent on the site.
              </li>
            </ul>

            <h2 className="mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-8 mb-6 text-[var(--color-gray)]">
              <li className="mb-2">Process donations and send receipts</li>
              <li className="mb-2">
                Send newsletters and updates about our work (with your consent)
              </li>
              <li className="mb-2">
                Respond to your inquiries and provide support
              </li>
              <li className="mb-2">
                Improve our website and communications
              </li>
              <li className="mb-2">
                Comply with legal obligations and protect our rights
              </li>
            </ul>

            <h2 className="mt-8 mb-4">
              Information Sharing
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted service
              providers who assist us in operating our website and conducting
              our activities, subject to confidentiality obligations.
            </p>

            <h2 className="mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-8 mb-6 text-[var(--color-gray)]">
              <li className="mb-2">
                Access the personal information we hold about you
              </li>
              <li className="mb-2">
                Request correction of inaccurate information
              </li>
              <li className="mb-2">
                Request deletion of your personal information
              </li>
              <li className="mb-2">
                Opt out of marketing communications at any time
              </li>
            </ul>

            <h2 className="mt-8 mb-4">
              Cookies
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              Our website may use cookies to enhance your experience. Cookies
              are small files stored on your device that help us understand how
              you use our site. You can control cookie settings through your
              browser preferences.
            </p>

            <h2 className="mt-8 mb-4">
              Third-Party Links
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              Our website may contain links to external sites. We are not
              responsible for the privacy practices of these third-party
              websites. We encourage you to review their privacy policies.
            </p>

            <h2 className="mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              this page with an updated revision date.
            </p>

            <h2 className="mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-6">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at{" "}
              <a
                href="mailto:info@westpapuacare.org"
                className="text-[var(--color-navy-accent)] hover:underline"
              >
                info@westpapuacare.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
