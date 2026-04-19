
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Scissors, GraduationCap, FileCheck, TrainFront } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import Script from "next/script";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations/fade-in";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the photo dimensions for UPSC 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For UPSC Civil Services (IAS/IPS) and NDA 2026, the official photograph requirements are: 350 x 350 pixels (square, 1:1 aspect ratio), file size between 20 KB and 300 KB, in JPG/JPEG format only. The background should be plain white and your face should occupy about 3/4th of the frame."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add a date and name to my SSC photo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SSC (Staff Selection Commission) requires a 'Date on Photo' (DOP) for CGL, CHSL, and other exams. The date must be clearly printed on the photo and should not be older than 3 months from the notification date. ExamResizer's SSC tool lets you toggle 'Add Name & Date' to automatically overlay the current date in the correct format."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compress my signature below 20KB without losing quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many exams like SSC and IBPS require signatures between 10 KB and 20 KB. ExamResizer uses a smart compression algorithm that preserves edge sharpness while reducing file size. Simply upload your scanned signature, select your target exam, and download — the tool automatically compresses to the exact KB range required."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my photo to online resizers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most online photo resizers upload your images to their servers, which poses a privacy risk. ExamResizer is different — all processing happens entirely in your browser using secure client-side technology. Your photos and signatures never leave your device. No data is uploaded to any server."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between passport size and exam photo size?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard passport-size photo is 35mm x 45mm (3.5cm x 4.5cm), but each government exam has its own digital requirements. UPSC requires 350x350px (square), SSC requires 3.5cm x 4.5cm with Date on Photo, and IBPS requires 200x230px at 20-50 KB. Using a generic passport photo without resizing to exact exam specifications will likely get rejected."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto w-full">
      <Script id="home-faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(homeFaqSchema)}
      </Script>

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 md:pt-10 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 text-center space-y-8">
          <FadeInStagger initialDelay={0.1} staggerDelay={0.15}>
            {/* Ad Space (Top) in empty header space */}
            <FadeInStaggerItem className="w-full flex justify-center pb-4">
              <AdPlaceholder slot="5052229973" className="w-full max-w-[728px] h-[90px]" label="Ad Space (Top Banner)" />
            </FadeInStaggerItem>

            <FadeInStaggerItem direction="up">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm">
                Updated for 2026 Guidelines
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white max-w-5xl mx-auto leading-tight">
                Resize Photos & Signatures for <span className="text-primary">Government Exams</span>
              </h1>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The most accurate photo resizer for UPSC, SSC, IBPS, and RRB.
                Process images locally in your browser. <span className="font-semibold text-foreground">No uploads. 100% Privacy.</span>
              </p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                <Link href="/tools">
                  Start Resizing Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50 hover:scale-[1.02] transition-transform">
                <Link href="/guides/upsc-photo-resize">
                  View Guidelines
                </Link>
              </Button>
            </FadeInStaggerItem>

            <FadeInStaggerItem direction="up" className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 hover:shadow-md transition-shadow">
                <ShieldCheck className="w-5 h-5 text-green-600" /> No Server Uploads
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 hover:shadow-md transition-shadow">
                <Zap className="w-5 h-5 text-amber-500" /> Instant Processing
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> 2026 Compliant
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <FadeInStagger staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
            <FadeInStaggerItem direction="up" className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automatic Formatting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Select your exam (e.g., UPSC) and we automatically crop and resize your photo to the exact official specifications (e.g., 350x350px).
              </p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Date on Photo (DOP)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mandatory for SSC. Our tool adds your name and the current date to the bottom of your photo with a single click.
              </p>
            </FadeInStaggerItem>
            <FadeInStaggerItem direction="up" className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your photos never leave your device. All processing happens in your browser using secure WebAssembly technology.
              </p>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Supported Exams & Dimensions (Restored & Styled) */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Supported Exams & Dimensions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We track official notifications to ensure these presets are always up-to-date.
            </p>
          </FadeIn>

          <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* UPSC */}
            <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">UPSC (IAS/IPS/NDA)</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Photo Dimensions</span>
                  <span className="font-medium text-foreground">350 x 350 px</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>File Size</span>
                  <span className="font-medium text-foreground">20 KB - 300 KB</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Format</span>
                  <span className="font-medium text-foreground">JPG Only</span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="w-full mt-6">
                <Link href="/resize/upsc">Resize for UPSC</Link>
              </Button>
            </FadeInStaggerItem>

            {/* SSC */}
            <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">SSC (CGL/CHSL)</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Photo Dimensions</span>
                  <span className="font-medium text-foreground">3.5cm x 4.5cm</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Signature Size</span>
                  <span className="font-medium text-foreground">10 KB - 20 KB</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Special Requirement</span>
                  <span className="font-medium text-foreground">Date on Photo (DOP)</span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="w-full mt-6">
                <Link href="/resize/ssc">Resize for SSC</Link>
              </Button>
            </FadeInStaggerItem>

            {/* IBPS */}
            <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">IBPS & SBI Banking</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Photo Size</span>
                  <span className="font-medium text-foreground">20 KB - 50 KB</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Thumb Impression</span>
                  <span className="font-medium text-foreground">20 KB - 50 KB</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Declaration</span>
                  <span className="font-medium text-foreground">Black Ink on White</span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="w-full mt-6">
                <Link href="/resize/ibps">Resize for IBPS</Link>
              </Button>
            </FadeInStaggerItem>

            {/* RRB */}
            <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600">
                  <TrainFront className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Railway (RRB)</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Photo Dimensions</span>
                  <span className="font-medium text-foreground">35mm x 45mm</span>
                </li>
                <li className="flex justify-between border-b border-dashed pb-2">
                  <span>Signature</span>
                  <span className="font-medium text-foreground">10 KB - 40 KB</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Note</span>
                  <span className="font-medium text-foreground">Light Background</span>
                </li>
              </ul>
              <Button asChild variant="secondary" className="w-full mt-6">
                <Link href="/resize/rrb">Resize for RRB</Link>
              </Button>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center mb-16">How to Resize Your Photo</h2>
          </FadeIn>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

            <FadeInStagger staggerDelay={0.15} className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <FadeInStaggerItem direction="up" className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Select Exam</h3>
                <p className="text-sm text-muted-foreground">Choose your target exam (UPSC, SSC, etc.)</p>
              </FadeInStaggerItem>

              {/* Step 2 */}
              <FadeInStaggerItem direction="up" className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Upload</h3>
                <p className="text-sm text-muted-foreground">Select photo or signature from your device.</p>
              </FadeInStaggerItem>

              {/* Step 3 */}
              <FadeInStaggerItem direction="up" className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Edit</h3>
                <p className="text-sm text-muted-foreground">Crop securely. Add name & date if needed.</p>
              </FadeInStaggerItem>

              {/* Step 4 */}
              <FadeInStaggerItem direction="up" className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-green-100 dark:border-green-900/50 flex items-center justify-center mb-4 shadow-sm hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground">Get your exact-size image instantly.</p>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="faq">
        <FadeIn className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Everything you need to know about photo and signature resizing for government exams.
          </p>
          <div className="space-y-4">
            <details className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                What are the photo dimensions for UPSC 2026?
                <span className="text-primary ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                <p>
                  For UPSC Civil Services (IAS/IPS) and NDA 2026, the official photograph requirements are: <strong>350 x 350 pixels</strong> (square, 1:1 aspect ratio), file size between <strong>20 KB and 300 KB</strong>, in <strong>JPG/JPEG format only</strong>. The background should be plain white and your face should occupy about 3/4th of the frame. Use our <Link href="/resize/upsc" className="text-primary hover:underline">UPSC Resizer Tool</Link> to get the exact dimensions instantly.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                How do I add a date and name to my SSC photo?
                <span className="text-primary ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                <p>
                  SSC (Staff Selection Commission) requires a &quot;Date on Photo&quot; (DOP) for CGL, CHSL, and other exams. The date must be clearly printed on the photo and should not be older than 3 months from the notification date. With <Link href="/resize/ssc" className="text-primary hover:underline">our SSC tool</Link>, simply toggle the &quot;Add Name &amp; Date&quot; switch, and we automatically overlay the current date in the correct format — no Photoshop needed.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                How do I compress my signature below 20KB without losing quality?
                <span className="text-primary ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                <p>
                  Many exams like SSC and IBPS require signatures between <strong>10 KB and 20 KB</strong>, which is extremely small. Standard compression tools often make signatures blurry and unreadable. ExamResizer uses a smart compression algorithm that preserves edge sharpness while reducing file size. Simply upload your scanned signature, select your target exam, and download — the tool automatically compresses to the exact KB range required.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                Is it safe to upload my photo to online resizers?
                <span className="text-primary ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                <p>
                  Most online photo resizers upload your images to their servers, which poses a privacy risk — especially with identity documents. <strong>ExamResizer is different.</strong> All processing happens entirely in your browser using secure client-side technology. Your photos and signatures <strong>never leave your device</strong>. No data is uploaded to any server, making it 100% safe for sensitive government exam documents.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                What is the difference between passport size and exam photo size?
                <span className="text-primary ml-4 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                <p>
                  A standard passport-size photo is <strong>35mm x 45mm</strong> (3.5cm x 4.5cm), but each government exam has its own digital requirements. For example, UPSC requires <strong>350x350px</strong> (square), SSC requires <strong>3.5cm x 4.5cm</strong> with Date on Photo, and IBPS requires <strong>200x230px</strong> at 20-50 KB. Using a generic passport photo without resizing to the exact exam specifications will likely get rejected during form submission.
                </p>
              </div>
            </details>
          </div>
        </FadeIn>
      </section>

      {/* Comprehensive Guide Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-center mb-6">The Complete Guide to Photo Resizing for Indian Government Exams</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every year, millions of Indian students apply for competitive government examinations conducted by bodies like UPSC, SSC, IBPS, RRB, and NTA. A critical step in every online application is uploading correctly formatted photographs and signatures. Despite being a seemingly simple task, photo upload errors are among the top reasons for application rejection — costing candidates their application fees, time, and sometimes an entire year of preparation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The challenge lies in the fact that <strong>every exam has different specifications</strong>. UPSC requires a 350×350 pixel square photo at 20–300 KB, while IBPS needs a rectangular 200×230 pixel photo at 20–50 KB. SSC adds a unique &quot;Date on Photo&quot; requirement that no other exam mandates. RRB follows the passport-size standard of 35mm×45mm, but with digital file size constraints. Meanwhile, NTA (NEET/JEE) introduces a postcard-size photo requirement alongside the standard passport-size upload.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ExamResizer.in was built specifically to solve this problem. Unlike generic photo editors that require you to manually enter dimensions and experiment with compression levels, our exam-specific tools are pre-configured with the exact specifications from each exam&apos;s official notification. You simply select your exam, upload your photo, crop using our visual guide, and download — the tool handles dimensions, aspect ratio, file format conversion, and compression automatically.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Privacy is non-negotiable.</strong> When you upload a photo to most online resizers, that image is sent to a remote server for processing. This means a copy of your identity document exists on someone else&apos;s server — a significant privacy risk. ExamResizer works entirely in your browser using client-side JavaScript and Canvas API. Your images are never transmitted over the internet. They stay on your device from start to finish. Even if you disconnect from the internet after loading the page, the tool continues to work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are a first-time applicant figuring out the specifications or a seasoned exam-taker who simply wants a reliable tool that works every time, ExamResizer is designed to make this one small but critical step in your exam journey completely stress-free.
              </p>
            </div>
          </FadeIn>

          {/* Guides Index */}
          <div className="mt-12">
            <FadeIn direction="up">
              <h3 className="text-2xl font-bold mb-6 text-center">In-Depth Guides &amp; Resources</h3>
            </FadeIn>
            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeInStaggerItem direction="up">
                <Link href="/guides/upsc-photo-resize" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">UPSC Photo Resize Guide 2026</h4>
                  <p className="text-sm text-muted-foreground mt-1">Official dimensions (350×350px), file size limits, signature scanning tips, and common mistakes.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/ssc-signature-guidelines" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">SSC CGL/CHSL Photo &amp; Signature Guide</h4>
                  <p className="text-sm text-muted-foreground mt-1">Date on Photo rules, signature compression to 10–20 KB, and Live Photo requirements.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/ibps-photo-resize" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">IBPS &amp; SBI Banking Photo Guide</h4>
                  <p className="text-sm text-muted-foreground mt-1">Photo (200×230px), signature, and thumb impression specifications for banking exams.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/rrb-photo-resize" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">RRB Railway Photo Guide</h4>
                  <p className="text-sm text-muted-foreground mt-1">NTPC, Group D, ALP specifications, mobile scanning tips, and verification checklist.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/neet-jee-photo-guidelines" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">NEET &amp; JEE Photo Guidelines</h4>
                  <p className="text-sm text-muted-foreground mt-1">NTA specifications, postcard-size photo requirement, JEE Main vs Advanced differences.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/passport-vs-exam-photo" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">Passport vs Exam Photo Comparison</h4>
                  <p className="text-sm text-muted-foreground mt-1">Complete comparison table, DPI explained, and conversion formulas for all exams.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/how-to-scan-signature" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">How to Scan Your Signature</h4>
                  <p className="text-sm text-muted-foreground mt-1">Phone scanning techniques, lighting tips, pen recommendations, and troubleshooting.</p>
                </Link>
              </FadeInStaggerItem>
              <FadeInStaggerItem direction="up">
                <Link href="/guides/photo-rejection-reasons" className="block h-full bg-white dark:bg-slate-950 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition-all duration-300">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">10 Photo Rejection Reasons &amp; Fixes</h4>
                  <p className="text-sm text-muted-foreground mt-1">Common rejection reasons ranked by frequency, with expert solutions for each one.</p>
                </Link>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Ad Space (Bottom) */}
      <div className="container px-4 py-8 flex justify-center">
        <AdPlaceholder slot="4860658287" format="autorelaxed" className="w-full max-w-[728px] h-[90px]" label="Ad Space (Bottom Banner)" />
      </div>

    </div>
  );
}
