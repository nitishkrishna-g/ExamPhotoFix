
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.examresizer.in'),
  title: "ExamResizer.in - Resize Photo & Signature for UPSC, SSC & Govt Exams",
  description: "Free tool to resize photos, join signatures, and calculate age for Indian government exams. Privacy first, no uploads.",
  manifest: '/manifest.json',
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9381303427467084"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}

