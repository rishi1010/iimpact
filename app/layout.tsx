import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Work_Sans,
  Poppins,
  Playfair_Display,
  Spectral,
  Homemade_Apple,
} from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  // Basic
  title: "IIMpact — India's MBA Dream Redefined",
  description:
    "A smarter way to crack CAT. Learn the topper's way of thinking with a proven 3-phase system led by 100%ilers from IIM Bangalore & FMS Delhi.",

  // Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "IIMpact — India's MBA Dream Redefined",
    description:
      "A smarter way to crack CAT. Learn the topper's way of thinking with a proven 3-phase system led by 100%ilers from IIM Bangalore & FMS Delhi.",
    url: "https://www.iimpact.mba",
    siteName: "IIMpact",
    images: [
      {
        url: "https://www.iimpact.mba/og-image.png", // must be absolute URL
        width: 1200,
        height: 630,
        alt: "IIMpact — India's MBA Dream Redefined",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "IIMpact — India's MBA Dream Redefined",
    description:
      "A smarter way to crack CAT. Learn the topper's way of thinking with a proven 3-phase system led by 100%ilers.",
    images: ["https://www.iimpact.mba/og-image.png"],
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.iimpact.mba",
  },

  keywords: [
    "CAT coaching",
    "CAT preparation",
    "CAT 2026",
    "IIM",
    "MBA",
    "IOMET",
    "WATPI",
    "WAT PI",
    "FMS Delhi",
    "IIM Bangalore",
    "IIM coaching",
    "MBA entrance exam",
    "CAT 100 percentile",
    "CAT topper",
    "online CAT coaching",
    "CAT study material",
    "MBA interview preparation",
    "IIMpact",
    "CAT mock test",
    "VARC preparation",
    "Quant preparation",
    "DILR preparation",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const homemadeApple = Homemade_Apple({
  variable: "--font-homemade-apple",
  weight: ["400"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${manrope.variable}
          ${workSans.variable}
          ${poppins.variable}
          ${playfairDisplay.variable}
          ${spectral.variable}
          ${homemadeApple.variable}
          antialiased
          overflow-x-hidden
        `}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
