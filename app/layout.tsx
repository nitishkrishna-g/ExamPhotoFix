
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://examresizer.vercel.app'),
  title: {
    default: "ExamResizer.in — Free Photo & Signature Resizer for UPSC, SSC, IBPS & Govt Exams",
    template: "%s | ExamResizer.in",
  },
  description: "Free, privacy-first tool to resize photos, signatures, and thumb impressions for Indian government exams (UPSC, SSC, IBPS, RRB, NEET, JEE). All processing happens in your browser — no server uploads. Updated for 2026 guidelines.",
  keywords: ["photo resizer", "signature resizer", "UPSC photo size", "SSC photo resize", "IBPS photo resize", "RRB photo resize", "NEET photo size", "JEE photo size", "government exam photo", "exam photo resize", "passport size photo", "date on photo SSC", "signature compress 20KB"],
  authors: [{ name: "ExamResizer.in Team" }],
  creator: "ExamResizer.in",
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google7a0b740b9cb15a92',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://examresizer.vercel.app',
    siteName: 'ExamResizer.in',
    title: "ExamResizer.in — Free Photo & Signature Resizer for Government Exams",
    description: "Free, privacy-first tool to resize photos and signatures for UPSC, SSC, IBPS, RRB, NEET, and JEE. No uploads. Updated for 2026.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "ExamResizer.in — Free Photo Resizer for Govt Exams",
    description: "Resize photos & signatures for UPSC, SSC, IBPS, RRB, NEET & JEE. 100% free, 100% private.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script id="schema-software" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ExamResizer",
            "url": "https://examresizer.vercel.app",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "description": "Free tool to resize photos, join signatures, and calculate age for Indian government exams. Privacy first, no uploads."
          })}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9381303427467084"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>

      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}

