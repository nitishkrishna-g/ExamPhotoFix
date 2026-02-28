import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RRB Railway Photo Resize Guide 2026 - NTPC, Group D, ALP Dimensions",
    description: "Complete guide to resizing photos and signatures for Railway Recruitment Board (RRB) exams including NTPC, Group D, and ALP. Official dimensions and file size limits.",
    alternates: {
        canonical: '/guides/rrb-photo-resize',
    },
};

export default function RrbGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo & Signature for Railway (RRB) Exams 2026</h1>
                <p className="lead">
                    A complete guide to formatting your documents for RRB NTPC, Group D, ALP, and other Railway Recruitment Board exams.
                </p>

                <h2>RRB Photo Upload Requirements</h2>
                <p>
                    The Railway Recruitment Board (RRB) conducts some of the largest-scale exams in India, including NTPC, Group D, and ALP.
                    While the application process is mostly online, the photo and signature upload step has strict requirements that
                    lead to frequent rejections if not followed precisely.
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-red-600">
                    <h3 className="text-lg font-bold mb-2">Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 35mm x 45mm (standard passport size).</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Background:</strong> Light/White background (no dark or coloured backgrounds).</li>
                        <li><strong>Face Coverage:</strong> 80% face visibility, front-facing, ears visible.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>File Size:</strong> 10 KB to 40 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Black or Blue ink on white paper.</li>
                        <li><strong>Style:</strong> Must be in running hand (cursive), not block letters.</li>
                    </ul>
                </div>

                <h2>Important Notes for RRB Applications</h2>
                <ul>
                    <li><strong>Photo Recency:</strong> The photograph should be recent (taken within the last 3 months). Outdated photos may be flagged during document verification at the exam centre.</li>
                    <li><strong>Glasses Policy:</strong> Wearing spectacles is allowed if eyes are clearly visible. Sunglasses and tinted lenses are strictly not allowed.</li>
                    <li><strong>Head Coverings:</strong> Religious head coverings are permitted, but the face must be fully visible from forehead to chin.</li>
                    <li><strong>Digital Manipulation:</strong> Do not use beauty filters or heavy retouching — the photo must match your physical appearance at the exam centre.</li>
                </ul>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Using a Selfie:</strong> RRB requires a professional passport-style photo. Selfies are taken at arm&apos;s length with distorted proportions and will be rejected.</li>
                    <li><strong>Low Scan Quality:</strong> When scanning your signature, use at least 300 DPI. Lower resolutions produce blurry, illegible signatures that get rejected during verification.</li>
                    <li><strong>Exceeding File Size:</strong> A common mistake is uploading a high-resolution photo that exceeds 50 KB. Our tool automatically compresses to the exact range.</li>
                    <li><strong>Wrong Background:</strong> Dark, patterned, or coloured backgrounds are not accepted. Always use a plain white or light grey background.</li>
                </ul>

                <h2>How to Resize Using ExamResizer</h2>
                <ol>
                    <li>Go to the <Link href="/resize/rrb">RRB Resizer Tool</Link>.</li>
                    <li>Upload your photo or scanned signature.</li>
                    <li>Use the crop guide to align your face or signature correctly.</li>
                    <li>The tool automatically sets the correct dimensions (35mm x 45mm) and compresses to 20-50 KB.</li>
                    <li>Click <strong>Download</strong> and upload directly to the RRB application portal.</li>
                </ol>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/rrb">Resize for RRB Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
