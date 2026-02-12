"use client"

import { Header } from "@/components/Header";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ExamPhotoWizard } from "@/components/tools/ExamPhotoWizard";
import { SignatureJoiner } from "@/components/tools/SignatureJoiner";
import { AgeCalculator } from "@/components/tools/AgeCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabParam || "photo");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams);
    params.set("tab", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Ad Slot 1: Leaderboard */}
        <section className="mb-8 flex justify-center">
          <AdPlaceholder width={728} height={90} label="Ad Space (Leaderboard)" className="w-full max-w-[728px] h-[90px]" />
        </section>

        {/* Hero Section */}
        <section className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-100 leading-tight">
            Resize Photo & Signature for <span className="text-blue-600 dark:text-blue-400">UPSC, SSC & Govt Exams</span> in 2 Seconds.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Privacy First. Images never leave your browser.
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Tools & Content */}
          <div className="lg:col-span-8 space-y-8">

            {/* Tool Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 p-1" id="tools">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <div className="px-6 pt-6 pb-2">
                  <TabsList className="grid w-full grid-cols-3 h-12 bg-slate-100/80 dark:bg-slate-800 p-1 rounded-lg">
                    <TabsTrigger value="photo" className="text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm transition-all shadow-none">Photo Wizard</TabsTrigger>
                    <TabsTrigger value="signature" className="text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm transition-all shadow-none">Signature Joiner</TabsTrigger>
                    <TabsTrigger value="age" className="text-sm font-semibold rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm transition-all shadow-none">Age Calculator</TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-4 md:p-6 bg-slate-50/30 dark:bg-slate-900/50">
                  <TabsContent value="photo" className="m-0 focus-visible:outline-none ring-offset-background">
                    <ExamPhotoWizard />
                  </TabsContent>
                  <TabsContent value="signature" className="m-0 focus-visible:outline-none ring-offset-background">
                    <SignatureJoiner />
                  </TabsContent>
                  <TabsContent value="age" className="m-0 focus-visible:outline-none ring-offset-background">
                    <AgeCalculator />
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {/* Ad Slot 2: High CTR */}
            <div className="flex justify-center">
              <AdPlaceholder width={300} height={250} label="Ad Space (300x250)" />
            </div>

            {/* SEO Content Section */}
            <article className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-8" id="guide">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">UPSC Photo & Signature Size Guidelines 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                      <th className="p-3 border">Exam</th>
                      <th className="p-3 border">Photo Size</th>
                      <th className="p-3 border">Signature Size</th>
                      <th className="p-3 border">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 border font-medium">UPSC CSE</td>
                      <td className="p-3 border">350x350px (20-300KB)</td>
                      <td className="p-3 border">350x350px (20-300KB)</td>
                      <td className="p-3 border">JPG</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 border font-medium">SSC CGL</td>
                      <td className="p-3 border">3.5cm x 4.5cm (20-50KB)</td>
                      <td className="p-3 border">4.0cm x 2.0cm (10-20KB)</td>
                      <td className="p-3 border">JPEG</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 border font-medium">IBPS PO</td>
                      <td className="p-3 border">4.5cm x 3.5cm (20-50KB)</td>
                      <td className="p-3 border">140x60px (10-20KB)</td>
                      <td className="p-3 border">JPG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-bold text-blue-800">Frequently Asked Questions</h3>

                <details className="group border dark:border-slate-700 rounded-lg p-4 cursor-pointer open:bg-blue-50/30 dark:open:bg-blue-900/20 transition-colors">
                  <summary className="font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between items-center">
                    How to resize photo to 20kb?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Use our "Exam Photo Wizard" tool above. Simply upload your photo, select the "SSC" or "Custom" preset, and the tool will automatically compress it to the required 20-50KB range while maintaining quality.
                  </p>
                </details>

                <details className="group border dark:border-slate-700 rounded-lg p-4 cursor-pointer open:bg-blue-50/30 dark:open:bg-blue-900/20 transition-colors">
                  <summary className="font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between items-center">
                    What is the triple signature rule?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    For certain exams like UPSC 2026 (hypothetical), candidates may be required to upload three signatures stacked vertically. Our "Signature Joiner" tool automates this process instantly.
                  </p>
                </details>

                <details className="group border dark:border-slate-700 rounded-lg p-4 cursor-pointer open:bg-blue-50/30 dark:open:bg-blue-900/20 transition-colors">
                  <summary className="font-semibold text-slate-800 dark:text-slate-200 list-none flex justify-between items-center">
                    Why is my photo rejected?
                    <span className="ml-2 transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Common reasons include: incorrect dimensions, file size too large or too small, blurry face, or background issues (should be light/white). Use our overlay guide to align your face correctly.
                  </p>
                </details>
              </div>
            </article>
          </div>

          {/* Right Column: Sticky Sidebar & Ads */}
          <div className="hidden lg:block lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <AdPlaceholder width={300} height={600} label="Ad Space (Sticky Sidebar)" className="h-[600px] w-full" />

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Pro Tip</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Always check the official notification for the latest rules. SarkariPhoto.in is updated daily based on notification releases.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 mt-12 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} SarkariPhoto.in. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="#" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600">Terms of Service</Link>
          <Link href="#" className="hover:text-blue-600">Contact</Link>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "SarkariPhoto.in",
            "url": "https://sarkariphoto.in",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "featureList": "Resize Photo for UPSC, Join Signatures, Calculate Age",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          })
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
