import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SscGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>New SSC CGL/CHSL Signature & Photo Guidelines 2026</h1>
                <p className="lead">
                    Understanding the new "Live Photo" requirement and strict signature dimensions for Staff Selection Commission exams.
                </p>

                <h2>The "Live Photo" Capture</h2>
                <p>
                    Starting recently, SSC has introduced a mechanism to capture a "Live Photo" via webcam during the application process. However, you still need to upload a **Signature** and often a **scanned backup photo**.
                </p>

                <h2>SSC Signature Rules (Strict)</h2>
                <p>
                    The signature rejection rate in SSC exams is very high because candidates ignore the aspect ratio.
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-orange-600">
                    <h3 className="text-lg font-bold mb-2">Signature Specifications</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>File Size:</strong> 10 KB to 20 KB (Very Small!).</li>
                        <li><strong>Dimensions:</strong> 4.0 cm (Width) x 2.0 cm (Height).</li>
                        <li><strong>Aspect Ratio:</strong> 2:1 (Horizontal).</li>
                        <li><strong>Background:</strong> White paper only.</li>
                        <li><strong>Ink:</strong> Black ink is preferred, though blue is accepted.</li>
                    </ul>
                </div>

                <h2>Why 10-20 KB is Tricky</h2>
                <p>
                    Compressing an image to below 20 KB often results in a blurry, unreadable signature.
                    <strong>SarkariPhoto.in</strong> uses a special compression algorithm to keep the edges sharp while reducing the file size, ensuring your signature remains legible.
                </p>

                <h2>The "Date on Photo" (DOP) Rule</h2>
                <p>
                    For uploaded backup photos, SSC strictly mandates that the **Date of Photograph (DOP)** be printed clearly on the photo.
                    The date should not be older than 3 months from the notification date.
                </p>
                <p>
                    <strong>Solution:</strong> Use our <Link href="/resize/ssc">SSC Tool</Link> and simply toggle the "Add Date" switch. We automatically add the current date in the correct format.
                </p>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/ssc">Resize for SSC CGL/CHSL</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
