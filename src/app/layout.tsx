import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const viewport = {
  minimumScale: 1,
  width: "device-width",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "West Papua Care - Protecting the Amazon of the Seas",
    template: "%s | West Papua Care",
  },
  description:
    "Community-led marine conservation in Raja Ampat, Indonesia. Establishing a 250 km² Marine Protected Area to protect the world's most biodiverse coral reefs.",
  keywords: [
    "marine conservation",
    "Raja Ampat",
    "coral reef protection",
    "community-led conservation",
    "West Papua",
    "marine protected area",
    "Coral Triangle",
  ],
  icons: {
    icon: "/west-papua-care/favicon.png",
    apple: "/west-papua-care/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
