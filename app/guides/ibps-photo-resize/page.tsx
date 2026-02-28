import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IBPS & SBI Photo Resize Guide 2026 - Exact Dimensions & Size Limits",
    description: "Complete guide to resizing photos, signatures, and thumb impressions for IBPS PO, Clerk, SO, and SBI exams. Official dimensions, file sizes, and common mistakes.",
    alternates: {
        canonical: '/guides/ibps-photo-resize',
    },
};

export default function IbpsGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo & Signature for IBPS & SBI Exams 2026</h1>
                <p className="lead">
                    A complete guide to formatting your photo, signature, and left thumb impression for IBPS PO, IBPS Clerk, IBPS SO, and SBI PO/Clerk exams.
                </p>

                <h2>Why IBPS Rejections Happen</h2>
                <p>
                    IBPS and SBI have one of the strictest upload validation systems among Indian government exams.
                    The form portal checks both dimensions and file size in real time — if your image doesn&apos;t match exactly,
                    the upload button simply won&apos;t work. Many candidates waste hours trying to get past this check.
                </p>

                <h2>Official IBPS Photo Specifications</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 200 pixels (Width) x 230 pixels (Height).</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Background:</strong> Plain White or Light-Coloured Background.</li>
                        <li><strong>Face Coverage:</strong> Face should cover about 50-75% of the photo area.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 140 pixels (Width) x 60 pixels (Height).</li>
                        <li><strong>File Size:</strong> 10 KB to 20 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Black ink on white paper (scanned).</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-amber-600">
                    <h3 className="text-lg font-bold mb-2">Left Thumb Impression</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 240 pixels (Width) x 240 pixels (Height) — square.</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Note:</strong> Use black or blue stamp pad ink on white paper.</li>
                    </ul>
                </div>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Wrong Aspect Ratio:</strong> IBPS requires a specific 200x230 ratio, not a standard passport size. Do not use a square crop.</li>
                    <li><strong>Signature Too Large:</strong> The 10-20 KB limit is very tight. Using a phone camera photo of your signature will almost always exceed this limit.</li>
                    <li><strong>Thumb Impression Clarity:</strong> A smudged or too-dark impression will be rejected during document verification, even if the upload goes through.</li>
                    <li><strong>Using PNG Format:</strong> IBPS only accepts JPG/JPEG. PNG files will be silently rejected by the portal.</li>
                </ul>

                <h2>How to Resize Using ExamResizer</h2>
                <ol>
                    <li>Go to the <Link href="/resize/ibps">IBPS Resizer Tool</Link>.</li>
                    <li>Select the document type (Photo, Signature, or Thumb Impression).</li>
                    <li>Upload your raw image — we automatically detect and crop to the correct dimensions.</li>
                    <li>Our smart compression ensures the file stays within the exact KB range required by IBPS.</li>
                    <li>Click <strong>Download</strong> and upload directly to the IBPS portal.</li>
                </ol>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/ibps">Resize for IBPS / SBI Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
