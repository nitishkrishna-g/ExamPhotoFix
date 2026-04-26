import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "SSC CGL/CHSL Signature & Photo Guidelines 2026 — Size, Format & DOP Rules | ExamResizer",
    description: "Complete guide to SSC signature and photo requirements for CGL, CHSL, MTS, and GD Constable 2026. Date on Photo rules, 10-20KB signature compression, live photo guidelines, and step-by-step instructions.",
    alternates: {
        canonical: '/guides/ssc-signature-guidelines',
    },
    openGraph: {
        title: "SSC CGL/CHSL Signature & Photo Guidelines 2026",
        description: "Complete guide to SSC signature and photo requirements — DOP rules, compression tips, and live photo guidelines.",
        url: '/guides/ssc-signature-guidelines',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "SSC Signature & Photo Guidelines 2026",
        description: "Date on Photo rules, 10-20KB compression, live photo capture, and step-by-step formatting for SSC exams.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the Date on Photo (DOP) requirement for SSC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SSC requires that the Date of Photograph (DOP) be clearly printed on the uploaded photo. The date must be printed at the bottom of the photo in DD/MM/YYYY format and must not be older than 3 months from the notification date. This applies to CGL, CHSL, MTS, and GD Constable exams."
            }
        },
        {
            "@type": "Question",
            "name": "How do I compress my SSC signature to below 20KB?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SSC requires signatures between 10-20 KB, which is extremely small. Standard compression tools often produce blurry results at this size. Use ExamResizer's smart compression which preserves edge sharpness. Scan your signature at 300 DPI on white paper with black ink, then use our SSC tool which automatically compresses to the exact KB range while keeping the signature legible."
            }
        },
        {
            "@type": "Question",
            "name": "What is the SSC Live Photo requirement?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SSC has introduced a 'Live Photo' capture via webcam during the online application process. This is captured in real-time and cannot be edited. However, you still need to upload a separate scanned photograph (with DOP) and a signature image that meets the specified file size requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Are SSC CGL and CHSL photo requirements the same?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, SSC CGL and CHSL have identical photo and signature specifications. The same requirements also apply to SSC MTS and SSC GD Constable. All SSC exams use the same application portal with the same upload validation rules."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use blue ink for my SSC signature?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Technically blue ink is accepted, but black ink is strongly recommended. Black ink provides much better contrast when scanned, especially at the tight 10-20 KB file size requirement. Blue ink signatures often appear faded or unreadable after compression."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SSC CGL/CHSL Signature & Photo Guidelines 2026",
    "description": "Understanding the new Live Photo requirement and strict signature dimensions for Staff Selection Commission exams.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/ssc-signature-guidelines" }
};

export default function SscGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="ssc-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="ssc-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>SSC CGL/CHSL Signature &amp; Photo Guidelines 2026 — Complete Guide</h1>
                <p className="lead">
                    A comprehensive guide to the photo, signature, and &quot;Date on Photo&quot; (DOP) requirements for all Staff Selection Commission examinations in 2026, including CGL, CHSL, MTS, and GD Constable.
                </p>

                <h2>Which SSC Exams Does This Apply To?</h2>
                <p>
                    The Staff Selection Commission (SSC) conducts multiple examinations annually. The photo and signature upload requirements are standardized across all SSC exams:
                </p>
                <ul>
                    <li><strong>SSC CGL (Combined Graduate Level)</strong> — Tier I and Tier II</li>
                    <li><strong>SSC CHSL (Combined Higher Secondary Level)</strong> — Tier I and Tier II</li>
                    <li><strong>SSC MTS (Multi-Tasking Staff)</strong></li>
                    <li><strong>SSC GD Constable</strong> — CAPFs, NIA, SSF, and Rifleman in AR</li>
                    <li><strong>SSC CPO (Central Police Organisation)</strong> — Sub-Inspector</li>
                    <li><strong>SSC JE (Junior Engineer)</strong></li>
                    <li><strong>SSC Stenographer</strong> — Grade C and Grade D</li>
                </ul>
                <p>
                    All these exams use the same SSC online registration portal (ssc.nic.in) with identical upload validation rules. If you prepare your documents according to this guide, they will work for any SSC exam.
                </p>

                <h2>Understanding the &quot;Live Photo&quot; Capture</h2>
                <p>
                    Starting from the 2025–2026 cycle, SSC has introduced a mechanism to capture a &quot;Live Photo&quot; via your webcam during the online application process. This is an anti-impersonation measure and is captured in real-time — you cannot edit, crop, or modify this image.
                </p>
                <p>
                    <strong>However, the Live Photo does NOT replace the traditional uploads.</strong> You still need to upload:
                </p>
                <ul>
                    <li>A scanned <strong>photograph</strong> with Date on Photo (DOP)</li>
                    <li>A scanned <strong>signature</strong> meeting the strict file size requirements</li>
                </ul>
                <p>
                    The Live Photo is matched against your uploaded photograph during exam day verification. Therefore, your uploaded photo should closely resemble your current appearance.
                </p>

                <h2>SSC Photo Specifications</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">Photograph Requirements (2026)</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 3.5 cm (Width) × 4.5 cm (Height) — approximately 413×531 pixels at 300 DPI.</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Background:</strong> Plain White Background.</li>
                        <li><strong>Face Coverage:</strong> 70–80% of the frame should show your face.</li>
                        <li><strong>Special Requirement:</strong> Date on Photo (DOP) — see below.</li>
                        <li><strong>⚠️ 2026 Glasses Policy — ZERO TOLERANCE:</strong> SSC has tightened its spectacles rule for 2026. No glasses of any kind are permitted in the photo — this includes prescription spectacles, anti-glare glasses, and contact lenses that alter eye colour. This is a stricter interpretation than previous years where clear prescription glasses were sometimes permitted.</li>
                    </ul>
                </div>

                <h2>The &quot;Date on Photo&quot; (DOP) Rule — Explained in Detail</h2>
                <p>
                    The DOP requirement is unique to SSC and is the single most common reason for photo rejection in SSC applications. Here is exactly what you need to know:
                </p>
                <ul>
                    <li><strong>What is DOP?</strong> The Date of Photograph must be clearly printed at the bottom of the photo. It indicates when the photo was taken.</li>
                    <li><strong>Format:</strong> The date should be in <strong>DD/MM/YYYY</strong> format (e.g., 15/03/2026).</li>
                    <li><strong>Recency:</strong> The date must not be older than <strong>3 months</strong> from the date of the exam notification. If the notification is dated 01/03/2026, your photo date should be no earlier than 01/12/2025.</li>
                    <li><strong>Placement:</strong> The date should be printed at the bottom edge of the photo in a clear, readable font. Many studios write it by hand, which is also acceptable.</li>
                    <li><strong>Name on Photo:</strong> Along with the date, some SSC notifications also require your <strong>name</strong> to be printed on the photo. Our tool supports adding both name and date automatically.</li>
                </ul>
                <p>
                    <strong>How our tool helps:</strong> With the <Link href="/resize/ssc">SSC Resizer</Link>, simply toggle the &quot;Add Name &amp; Date&quot; switch, type your name, and the tool automatically overlays the current date in the correct DD/MM/YYYY format at the bottom of your photo.
                </p>

                <h2>SSC Signature Rules (Strict)</h2>
                <p>
                    The signature rejection rate in SSC exams is significantly higher than other government exams because of the extremely tight file size requirement. Many candidates overlook this and waste multiple attempts trying to get it right.
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-orange-600">
                    <h3 className="text-lg font-bold mb-2">Signature Specifications</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>File Size:</strong> 10 KB to 20 KB — this is extremely small and requires careful compression.</li>
                        <li><strong>Dimensions:</strong> 4.0 cm (Width) × 2.0 cm (Height).</li>
                        <li><strong>Aspect Ratio:</strong> 2:1 (horizontal/landscape orientation).</li>
                        <li><strong>Background:</strong> White paper only — no coloured or lined paper.</li>
                        <li><strong>Ink:</strong> Black ink is strongly recommended. Blue ink is accepted but produces weaker contrast after compression.</li>
                        <li><strong>Style:</strong> Running hand (cursive) only. Block letter signatures are not accepted.</li>
                    </ul>
                </div>

                <h2>Why 10–20 KB Is Extremely Tricky</h2>
                <p>
                    To put this in perspective, a single smartphone photo is typically 3–5 MB (3,000–5,000 KB). SSC requires your signature to be between 10–20 KB — that&apos;s roughly <strong>200–500 times smaller</strong> than a typical phone photo.
                </p>
                <p>
                    At this compression level, standard JPEG compression algorithms destroy fine details like the thin strokes of a signature, making it blurry and unreadable. This is why many candidates fail the upload — their compressed signature is either:
                </p>
                <ul>
                    <li>Too blurry to pass manual verification, or</li>
                    <li>Too large (exceeding 20 KB) because reducing quality further makes it unusable.</li>
                </ul>
                <p>
                    <strong>ExamResizer.in&apos;s solution:</strong> Our SSC tool uses a smart compression algorithm specifically designed for signatures. It preserves edge sharpness (the actual ink strokes) while aggressively compressing the white background areas. The result is a crisp, readable signature at exactly 10–20 KB.
                </p>

                <h2>How SSC Requirements Differ from Other Exams</h2>
                <div className="not-prose overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 text-left border-b font-semibold">Specification</th>
                                <th className="p-3 text-left border-b font-semibold">SSC</th>
                                <th className="p-3 text-left border-b font-semibold">UPSC</th>
                                <th className="p-3 text-left border-b font-semibold">IBPS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Photo Size</td>
                                <td className="p-3">20–50 KB</td>
                                <td className="p-3">20–300 KB</td>
                                <td className="p-3">20–50 KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Signature Size</td>
                                <td className="p-3 font-bold text-orange-600">10–20 KB</td>
                                <td className="p-3">20–300 KB</td>
                                <td className="p-3">10–20 KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Date on Photo</td>
                                <td className="p-3 font-bold text-orange-600">Mandatory</td>
                                <td className="p-3">Optional</td>
                                <td className="p-3">Not Required</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Live Photo</td>
                                <td className="p-3 font-bold text-orange-600">Yes (Webcam)</td>
                                <td className="p-3">No</td>
                                <td className="p-3">No</td>
                            </tr>
                            <tr>
                                <td className="p-3">Thumb Impression</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Scanning Tips for Sharp Signatures</h2>
                <ol>
                    <li><strong>Use black ink on white paper:</strong> Sign on a clean, unlined A4 sheet. Avoid notebook paper — the lines will appear in the scan.</li>
                    <li><strong>Scan at 300+ DPI:</strong> Whether using a flatbed scanner or phone camera, higher resolution source images produce much better results after compression.</li>
                    <li><strong>Use natural daylight:</strong> If scanning with a phone, place the paper near a window for even lighting. Avoid overhead lights that create uneven shadows.</li>
                    <li><strong>Hold the phone parallel:</strong> Keep your phone directly above the signature, not at an angle. Tilting causes perspective distortion.</li>
                    <li><strong>Crop tightly:</strong> Remove all extra white space around the signature. The final crop should show only the signature with a thin margin.</li>
                    <li><strong>Check readability:</strong> After compression, zoom to 100% and verify that all letters of your signature are clearly readable.</li>
                </ol>

                <h2>Troubleshooting Common Upload Errors</h2>
                <ul>
                    <li><strong>&quot;File size should be between 10KB to 20KB&quot;:</strong> Your signature exceeds 20 KB. Use our tool for smart compression that reduces size while preserving clarity.</li>
                    <li><strong>&quot;Invalid image format&quot;:</strong> You uploaded a PNG, BMP, or HEIC file. Convert to JPEG format first.</li>
                    <li><strong>&quot;Photo too old&quot; during verification:</strong> The DOP on your photo is older than 3 months from the notification date. Retake your photo with a current date.</li>
                    <li><strong>Live Photo capture fails:</strong> Ensure your webcam is working, the room is well-lit, and your browser has camera permissions enabled. Use Chrome or Firefox for best compatibility.</li>
                </ul>

                <h2>How to Resize Using ExamResizer.in</h2>
                <ol>
                    <li>Go to the <Link href="/resize/ssc">SSC Resizer Tool</Link>.</li>
                    <li>Select whether you are uploading a Photo or Signature.</li>
                    <li>Upload your raw image.</li>
                    <li>For photos: Toggle &quot;Add Name &amp; Date&quot; to automatically add the DOP.</li>
                    <li>Use the crop tool to frame your signature or face correctly.</li>
                    <li>Click <strong>Download</strong> — the tool automatically sizes and compresses to SSC specifications.</li>
                </ol>
                <p>
                    All processing happens in your browser. No images are sent to any server, ensuring complete privacy.
                </p>

                <h2>Official Sources &amp; References</h2>
                <ul>
                    <li><strong>SSC Official Website:</strong> <a href="https://ssc.nic.in" target="_blank" rel="noopener noreferrer">ssc.nic.in</a></li>
                    <li><strong>SSC Online Registration:</strong> <a href="https://ssc.nic.in/Portal/Registration" target="_blank" rel="noopener noreferrer">ssc.nic.in/Portal/Registration</a></li>
                    <li><strong>Guidelines:</strong> Available in the &quot;Instructions to Candidates&quot; section of each exam notification.</li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with SSC or any government organization. This guide is based on publicly available official notifications and is for informational purposes only.</em>
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
