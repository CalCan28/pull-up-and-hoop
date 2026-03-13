import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const barlow = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Pull Up & Hoop - Find Pickup Basketball Games Near You",
  description:
    "Locate parks with active pickup basketball games, check in, and rate courts in your area.",
  openGraph: {
    title: "Pull Up & Hoop",
    description:
      "The pickup basketball app. Find courts, call next, pick your squad, and track your stats.",
    url: "https://www.pullupandhoop.com",
    siteName: "Pull Up & Hoop",
    images: [
      {
        url: "https://www.pullupandhoop.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pull Up & Hoop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pull Up & Hoop",
    description:
      "The pickup basketball app. Find courts, call next, pick your squad, and track your stats.",
    images: ["https://www.pullupandhoop.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${barlow.variable} font-body antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
