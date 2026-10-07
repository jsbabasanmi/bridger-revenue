import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-titillium',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revenue.usebridger.com"),
  title: {
    default: "Revenue OS | Your AI Revenue Department",
    template: "%s | Revenue OS"
  },
  description: "Capture every lead. Follow up automatically. Close more customers. Keep them coming back. Revenue OS brings your leads, conversations, sales pipeline and follow-up into one intelligent AI system.",
  keywords: ["AI revenue system", "AI sales platform", "revenue automation", "AI CRM", "sales pipeline automation", "lead management software", "customer retention AI", "revenue intelligence", "AI revenue department"],
  authors: [{ name: "Bridger" }],
  creator: "Bridger",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revenue.usebridger.com",
    siteName: "Revenue OS",
    title: "Revenue OS | Your AI Revenue Department",
    description: "The complete AI revenue platform. Capture, qualify, convert, retain and reactivate customers automatically.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revenue OS - Your AI Revenue Department",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue OS | Your AI Revenue Department",
    description: "Capture every lead. Follow up automatically. Close more customers. Keep them coming back.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titilliumWeb.variable}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
