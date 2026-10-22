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
  metadataBase: new URL("https://www.lifesciencexai.com"),
  title: {
    default: "LifeScienceX AI | VeriBatch™ Life Sciences Batch Review System",
    template: "%s | LifeScienceX AI",
  },
  description:
    "LifeScienceX AI delivers enterprise software for Life Sciences operations. Our flagship product, VeriBatch™, streamlines pharmaceutical batch record review, MBR/BMR comparison, and exception management.",
  keywords: [
    "VeriBatch",
    "VeriBatch software",
    "life sciences software",
    "pharmaceutical batch review",
    "MBR BMR comparison",
    "batch record review system",
    "pharma technology",
    "LifeScienceX AI",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "LifeScienceX AI | VeriBatch™ Batch Review System",
    description:
      "Enterprise software for smarter Life Sciences operations — VeriBatch™ Batch Review System, MBR/BMR Comparison, Exception Management.",
    url: "https://www.lifesciencexai.com",
    siteName: "LifeScienceX AI",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "LifeScienceX AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeScienceX AI | VeriBatch™ Batch Review System",
    description:
      "Enterprise software for smarter Life Sciences operations — VeriBatch™ Batch Review System, MBR/BMR Comparison, Exception Management.",
    images: ["/images/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LifeScienceX AI",
  url: "https://www.lifesciencexai.com",
  logo: "https://www.lifesciencexai.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8788064895",
    contactType: "Customer Service",
    email: "lifesciencexai@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
