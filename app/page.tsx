
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Scissors, GraduationCap, FileCheck, TrainFront } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 text-center space-y-8">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm">
            Updated for 2026 Guidelines
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white max-w-5xl mx-auto leading-tight">
            Resize Photos & Signatures for <span className="text-primary">Government Exams</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The most accurate photo resizer for UPSC, SSC, IBPS, and RRB.
            Process images locally in your browser. <span className="font-semibold text-foreground">No uploads. 100% Privacy.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              <Link href="/tools">
                Start Resizing Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50">
              <Link href="/guides/upsc-photo-resize">
                View Guidelines
              </Link>
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50">
              <ShieldCheck className="w-5 h-5 text-green-600" /> No Server Uploads
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50">
              <Zap className="w-5 h-5 text-amber-500" /> Instant Processing
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50">
              <CheckCircle2 className="w-5 h-5 text-blue-600" /> 2026 Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automatic Formatting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Select your exam (e.g., UPSC) and we automatically crop and resize your photo to the exact official specifications (e.g., 350x350px).
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Date on Photo (DOP)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mandatory for SSC. Our tool adds your name and the current date to the bottom of your photo with a single click.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your photos never leave your device. All processing happens in your browser using secure WebAssembly technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Exams & Dimensions (Restored & Styled) */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Supported Exams & Dimensions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We track official notifications to ensure these presets are always up-to-date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* UPSC */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors">
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
            </div>

            {/* SSC */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors">
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
            </div>

            {/* IBPS */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors">
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
            </div>

            {/* RRB */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors">
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
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How to Resize Your Photo</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Select Exam</h3>
                <p className="text-sm text-muted-foreground">Choose your target exam (UPSC, SSC, etc.)</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Upload</h3>
                <p className="text-sm text-muted-foreground">Select photo or signature from your device.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Edit</h3>
                <p className="text-sm text-muted-foreground">Crop securely. Add name & date if needed.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-950 border-4 border-green-100 dark:border-green-900/50 flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground">Get your exact-size image instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
