const partners = [
  { name: "UNSW Sydney", logo: "/partners/unsw.svg" },
  { name: "Conservation International", logo: "/partners/conservation-intl.svg" },
  { name: "The Nature Conservancy", logo: "/partners/tnc.svg" },
  { name: "World Wildlife Fund", logo: "/partners/wwf.svg" },
  { name: "University of Papua", logo: "/partners/unipa.svg" },
  { name: "Indonesian Ministry of Marine Affairs", logo: "/partners/ministry.svg" },
];

export function PartnersCarousel() {
  return (
    <section className="bg-[#0A2D3D] bg-[var(--color-forest-green-deep)] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-8">
        <div className="section-label text-center text-[rgba(255,255,255,0.7)]">
          [ OUR PARTNERS ]
        </div>
        <h2 className="text-center text-white mb-12">
          Working Together for Marine Conservation
        </h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] will-change-transform hover:pause">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 md:w-44 lg:w-48 h-20 md:h-[90px] lg:h-24 flex items-center justify-center p-4"
              >
                <div className="w-full h-full bg-[rgba(255,255,255,0.1)] rounded flex items-center justify-center text-[rgba(255,255,255,0.7)] text-sm font-medium transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:text-white">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
