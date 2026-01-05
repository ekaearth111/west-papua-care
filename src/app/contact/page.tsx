import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with West Papua Care - questions about our work, partnership inquiries, or donation information.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Get in Touch"
        subtitle="We'd love to hear from you - whether you have questions, want to partner, or are ready to support our mission"
      />

      <section className="py-16 lg:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-[var(--max-width-content)] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className=" mb-6">Contact Information</h2>
              <p className="text-lg leading-[1.7] text-[var(--color-gray)] mb-8">
                We welcome inquiries from potential donors, partners,
                researchers, and anyone interested in community-led marine
                conservation.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-burnt-orange)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className=" mb-1">Email</h3>
                    <p className="text-[var(--color-gray)] m-0">
                      <a
                        href="mailto:westpapuacare@gmail.com"
                        className="text-[var(--color-navy-accent)] hover:underline"
                      >
                        westpapuacare@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-[var(--color-gray)] mt-1">
                      General inquiries and partnership discussions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-forest-green)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className=" mb-1">WhatsApp</h3>
                    <p className="text-[var(--color-gray)] m-0">
                      <a
                        href="https://wa.me/6282266608012"
                        className="text-[var(--color-navy-accent)] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +62 822 6660 8012
                      </a>
                    </p>
                    <p className="text-sm text-[var(--color-gray)] mt-1">
                      Quick questions and direct communication
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-navy-accent)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className=" mb-1">Project Location</h3>
                    <p className="text-[var(--color-gray)] m-0">
                      Misool, Raja Ampat
                      <br />
                      West Papua, Indonesia
                    </p>
                    <p className="text-sm text-[var(--color-gray)] mt-1">
                      Base camp on Cempedak Island
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-cream)] p-8 rounded-lg mt-8">
                <h3 className=" mb-4">Response Time</h3>
                <p className="text-[var(--color-gray)] m-0">
                  Due to our remote location, response times may vary. We aim to
                  respond to all inquiries within 3-5 business days. For urgent
                  matters, please indicate this in your subject line.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-cream)] p-8 lg:p-12 rounded-lg">
              <h2 className=" mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/20 bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-burnt-orange)] focus:ring-2 focus:ring-[var(--color-burnt-orange)]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/20 bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-burnt-orange)] focus:ring-2 focus:ring-[var(--color-burnt-orange)]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/20 bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-burnt-orange)] focus:ring-2 focus:ring-[var(--color-burnt-orange)]/20"
                  >
                    <option value="">Select a topic...</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="research">Research Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-gray)]/20 bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-burnt-orange)] focus:ring-2 focus:ring-[var(--color-burnt-orange)]/20 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--color-burnt-orange)] text-white font-semibold rounded-lg hover:bg-[var(--color-burnt-orange-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-burnt-orange)] focus:ring-offset-2"
                >
                  Send Message
                </button>

                <p className="text-sm text-[var(--color-gray)] text-center">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-[var(--color-navy-accent)] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
