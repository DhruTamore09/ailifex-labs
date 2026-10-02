import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AILifeX Labs | VeriBatch™ Life Sciences Batch Review System",
    template: "%s | AILifeX Labs",
  },
  description:
    "AILifeX Labs delivers enterprise software for Life Sciences operations. Our flagship product, VeriBatch™, streamlines pharmaceutical batch record review, MBR/BMR comparison, and exception management.",
  keywords: [
    "VeriBatch",
    "VeriBatch software",
    "life sciences software",
    "pharmaceutical batch review",
    "MBR BMR comparison",
    "batch record review system",
    "pharma technology",
    "AILifeX Labs",
  ],
  openGraph: {
    title: "AILifeX Labs | VeriBatch™ Batch Review System",
    description:
      "Enterprise software for smarter Life Sciences operations — VeriBatch™ Batch Review System, MBR/BMR Comparison, Exception Management.",
    url: "https://ailifexlabs.com",
    siteName: "AILifeX Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AILifeX Labs | VeriBatch™ Batch Review System",
    description:
      "Enterprise software for smarter Life Sciences operations — VeriBatch™ Batch Review System, MBR/BMR Comparison, Exception Management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
