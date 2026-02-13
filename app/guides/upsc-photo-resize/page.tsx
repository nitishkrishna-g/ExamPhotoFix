import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function UpscGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo & Signature for UPSC Civil Services 2026</h1>
                <p className="lead">
                    A complete guide to formatting your documents for IAS, IPS, IFS, and NDA exams according to the latest official notification.
                </p>

                <h2>Official Dimensions & Size Limits</h2>
                <p>
                    The Union Public Service Commission (UPSC) is extremely strict about document uploads. A slight deviation can lead to technical rejection during the form filling process.
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">UPSC Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Size:</strong> 20 KB to 300 KB.</li>
                        <li><strong>Dimensions:</strong> 350 pixels (Width) x 350 pixels (Height).</li>
                        <li><strong>Background:</strong> Plain White Background.</li>
                        <li><strong>Content:</strong> 3/4th of the photo should be the face. Name and Date on photo is optional but recommended.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">UPSC Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Size:</strong> 20 KB to 300 KB.</li>
                        <li><strong>Dimensions:</strong> 350 pixels (Width) x 350 pixels (Height).</li>
                        <li><strong>Ink:</strong> Black Ink on White Paper.</li>
                    </ul>
                </div>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Uploading a Selfie:</strong> Never use a selfie. Use a professional passport-style photo.</li>
                    <li><strong>Blurred Images:</strong> Ensure your signature is sharp and scanned in high resolution before resizing.</li>
                    <li><strong>Incorrect Aspect Ratio:</strong> UPSC requires a square aspect ratio (1:1) for digital uploads in pixel terms for optimal display.</li>
                    <li><strong>Wearing Glasses:</strong> Avoid wearing dark glasses or sunglasses. Spectacles are allowed if eyes are clearly visible.</li>
                </ul>

                <h2>How to Resize Using SarkariPhoto.in</h2>
                <ol>
                    <li>Go to the <Link href="/resize/upsc">UPSC Resizer Tool</Link>.</li>
                    <li>Upload your raw photo or signature.</li>
                    <li>Use the crop tool to align your face within the guide.</li>
                    <li>Click <strong>Download</strong>. Our tool automatically sets the DPI and file size (KB) to match UPSC servers.</li>
                </ol>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/upsc">Resize for UPSC Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
