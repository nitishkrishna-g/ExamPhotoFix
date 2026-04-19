import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "RRB Railway Photo Resize Guide 2026 — NTPC, Group D, ALP Dimensions & Size Limits | ExamResizer",
    description: "Complete guide to resizing photos and signatures for Railway Recruitment Board (RRB) exams 2026 including NTPC, Group D, ALP, and JE. Official dimensions, file size limits, scanning tips, and common mistakes.",
    alternates: {
        canonical: '/guides/rrb-photo-resize',
    },
    openGraph: {
        title: "RRB Railway Photo Resize Guide 2026 — NTPC, Group D, ALP",
        description: "Official photo and signature specifications for all Railway Recruitment Board exams.",
        url: '/guides/rrb-photo-resize',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "RRB Railway Photo Resize Guide 2026",
        description: "Exact photo dimensions, file sizes, and step-by-step resizing instructions for all RRB exams.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the photo dimensions for RRB NTPC 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "RRB NTPC requires photographs of 35mm x 45mm (standard passport size), in JPG/JPEG format, with a file size between 20 KB and 50 KB. The background must be white or light-coloured with 80% face visibility."
            }
        },
        {
            "@type": "Question",
            "name": "Are RRB NTPC and Group D photo requirements the same?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all RRB exams — including NTPC, Group D, ALP, and JE — have the same photo and signature specifications. The requirements are standardized across all Railway Recruitment Boards in India."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need a Date on Photo for RRB exams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "RRB does not strictly mandate a Date on Photo (DOP) like SSC does. However, your photo must be recent (taken within the last 3 months). Some RRB notifications recommend including the date for additional verification."
            }
        },
        {
            "@type": "Question",
            "name": "Can I wear glasses in my RRB exam photo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Regular prescription spectacles are allowed if your eyes are clearly visible without any glare or reflection. Sunglasses, tinted lenses, and coloured contact lenses are strictly not allowed."
            }
        },
        {
            "@type": "Question",
            "name": "What type of signature does RRB accept?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "RRB requires signatures in running hand (cursive) style using black or blue ink on white paper. The signature file must be between 10-40 KB in JPG/JPEG format. Block letter signatures are not accepted."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "RRB Railway Photo Resize Guide 2026 — NTPC, Group D, ALP",
    "description": "Complete guide to formatting photos and signatures for Railway Recruitment Board exams.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-02-01",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/rrb-photo-resize" }
};

export default function RrbGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="rrb-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="rrb-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo &amp; Signature for Railway (RRB) Exams 2026</h1>
                <p className="lead">
                    A comprehensive guide to formatting your photograph and signature for all Railway Recruitment Board exams, including RRB NTPC, Group D, ALP, JE, and Ministerial &amp; Isolated Categories. Updated for the 2026 recruitment cycle.
                </p>

                <h2>Which RRB Exams Does This Cover?</h2>
                <p>
                    The Railway Recruitment Boards (RRBs) conduct some of the largest-scale competitive exams in India, with individual recruitment drives attracting tens of millions of applicants. This guide covers all RRB examinations:
                </p>
                <ul>
                    <li><strong>RRB NTPC (Non-Technical Popular Categories)</strong> — Undergraduate and Graduate levels</li>
                    <li><strong>RRB Group D (Level 1)</strong> — Track Maintainer, Helper, and other positions</li>
                    <li><strong>RRB ALP (Assistant Loco Pilot)</strong> &amp; Technician</li>
                    <li><strong>RRB JE (Junior Engineer)</strong> — Civil, Electrical, Mechanical, IT, and other branches</li>
                    <li><strong>RRB Ministerial &amp; Isolated Categories</strong></li>
                    <li><strong>RRB Paramedical Categories</strong></li>
                </ul>
                <p>
                    India has 21 regional Railway Recruitment Boards (RRB Ahmedabad, RRB Allahabad, RRB Mumbai, RRB Chennai, etc.), but they all use a centralized online application portal with identical upload validation rules. This means the photo and signature specifications are the same regardless of which RRB zone you apply to.
                </p>

                <h2>Understanding the Scale of RRB Applications</h2>
                <p>
                    RRB exams routinely receive 1–3 crore (10–30 million) applications per recruitment cycle. With this massive volume, even a small percentage of photo-related rejections translates to lakhs of affected candidates. Common issues include:
                </p>
                <ul>
                    <li>Uploading photos that are too large (exceeding 50 KB)</li>
                    <li>Using incorrect background colours</li>
                    <li>Submitting blurry or distorted images from phone selfies</li>
                    <li>Uploading signature images in PNG format instead of JPEG</li>
                </ul>
                <p>
                    Since RRB application fees are non-refundable and the window for correction is limited, getting your documents right on the first attempt is critical.
                </p>

                <h2>Official RRB Photo Specifications</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-red-600">
                    <h3 className="text-lg font-bold mb-2">Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 35mm × 45mm (standard passport size) — approximately 413×531 pixels at 300 DPI.</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Background:</strong> Plain white or light-coloured background — no dark, patterned, or outdoor backgrounds.</li>
                        <li><strong>Face Coverage:</strong> 80% face visibility, front-facing, both ears visible.</li>
                        <li><strong>Expression:</strong> Neutral expression with mouth closed.</li>
                        <li><strong>Recency:</strong> Photo must be taken within the last 3 months.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>File Size:</strong> 10 KB to 40 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Black or Blue ink on plain white paper.</li>
                        <li><strong>Style:</strong> Running hand (cursive) only — block letters are not accepted.</li>
                        <li><strong>Consistency:</strong> The signature must match what you sign on the answer sheet and attendance register at the exam centre.</li>
                    </ul>
                </div>

                <h2>NTPC vs Group D vs ALP — Key Differences</h2>
                <p>
                    While the photo and signature specifications are identical across all RRB exams, there are some practical differences in the application process:
                </p>
                <div className="not-prose overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 text-left border-b font-semibold">Feature</th>
                                <th className="p-3 text-left border-b font-semibold">NTPC</th>
                                <th className="p-3 text-left border-b font-semibold">Group D</th>
                                <th className="p-3 text-left border-b font-semibold">ALP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Photo Specs</td>
                                <td className="p-3">35×45mm, 20-50KB</td>
                                <td className="p-3">35×45mm, 20-50KB</td>
                                <td className="p-3">35×45mm, 20-50KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Signature Specs</td>
                                <td className="p-3">10-40KB</td>
                                <td className="p-3">10-40KB</td>
                                <td className="p-3">10-40KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Correction Window</td>
                                <td className="p-3">Usually 3–5 days</td>
                                <td className="p-3">Usually 3–5 days</td>
                                <td className="p-3">Usually 3–5 days</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Fee (General)</td>
                                <td className="p-3">₹500</td>
                                <td className="p-3">₹500</td>
                                <td className="p-3">₹500</td>
                            </tr>
                            <tr>
                                <td className="p-3">Document Verification</td>
                                <td className="p-3">At exam centre</td>
                                <td className="p-3">At PET/exam centre</td>
                                <td className="p-3">At exam centre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Regional Language Considerations</h2>
                <p>
                    RRB is unique among government exams in that it has 21 regional boards across India. While the application portal is available in English and Hindi, candidates from different regions may face specific challenges:
                </p>
                <ul>
                    <li><strong>Name on photo:</strong> If your name needs to appear on the photo, use the same script (English or regional language) that appears on your admit card.</li>
                    <li><strong>Signature script:</strong> You can sign in any language — Hindi, English, Telugu, Tamil, Bengali, etc. However, ensure you use the same signature consistently on the application, admit card, and answer sheet.</li>
                    <li><strong>Studio instructions:</strong> If you visit a local photo studio, bring a printout of the specifications (35×45mm, 20–50 KB, white background) to avoid miscommunication.</li>
                </ul>

                <h2>Important Rules for RRB Photos</h2>
                <ul>
                    <li><strong>Photo recency:</strong> The photograph should be taken within the last 3 months. Outdated photos may be flagged during document verification at the exam centre, which can lead to disqualification.</li>
                    <li><strong>Glasses policy:</strong> Wearing prescription spectacles is allowed only if your eyes are clearly visible without any glare or reflection. Sunglasses and tinted lenses are strictly prohibited.</li>
                    <li><strong>Head coverings:</strong> Religious head coverings (turban, hijab) are permitted, but your face must be fully visible from forehead to chin. Non-religious headgear (caps, hats) is not allowed.</li>
                    <li><strong>Digital manipulation:</strong> Do not use beauty filters, heavy retouching, or AI enhancement tools. The uploaded photo must accurately represent your physical appearance as you will appear at the exam centre.</li>
                    <li><strong>Ear visibility:</strong> Both ears should be visible in the photo. Hairstyles that cover the ears may need to be adjusted for the photo.</li>
                </ul>

                <h2>Mobile Phone Scanning Tips for RRB</h2>
                <p>
                    Many RRB candidates, especially those in rural areas, may not have access to scanners. Here&apos;s how to get professional results with just a smartphone:
                </p>
                <ol>
                    <li><strong>Prop your document:</strong> Tape or place the signed/photographed document flat on a table near a window. Natural daylight provides the best, most even illumination.</li>
                    <li><strong>Use the phone&apos;s document mode:</strong> Most modern phones (Samsung, Xiaomi, Realme, Oppo, Vivo, iPhone) have a &quot;Scan&quot; or &quot;Document&quot; mode in the camera app. This automatically corrects perspective and enhances contrast.</li>
                    <li><strong>Hold steady:</strong> Rest your elbows on the table to minimize shaking. Hold the phone about 20–30 cm above the document, directly overhead.</li>
                    <li><strong>Check for shadows:</strong> Ensure your hand, phone, or body does not cast a shadow on the document. If it does, move the light source or reposition yourself.</li>
                    <li><strong>Take multiple shots:</strong> Take 3–4 photos and pick the sharpest one. Delete the rest after processing.</li>
                </ol>

                <h2>Document Verification Day Checklist</h2>
                <p>
                    After passing the CBT (Computer Based Test), RRB conducts physical document verification. Your uploaded photo and signature are matched against your physical appearance. Be prepared:
                </p>
                <ul>
                    <li>Look similar to your uploaded photo — same hairstyle, no major appearance changes.</li>
                    <li>Carry the same pen and be prepared to sign on the spot to match your uploaded signature.</li>
                    <li>Bring 4–6 passport-size colour photos (same as uploaded) for verification forms.</li>
                    <li>Carry all original documents along with photocopies.</li>
                </ul>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Using a selfie:</strong> RRB requires a professional passport-style photo. Selfies are taken at arm&apos;s length with wide-angle lens distortion, making your face appear unnaturally wide.</li>
                    <li><strong>Low scan quality:</strong> When scanning your signature, aim for at least 300 DPI. Lower resolutions produce blurry, illegible signatures that get rejected during physical verification.</li>
                    <li><strong>Exceeding file size:</strong> A common mistake is uploading a high-resolution photo that exceeds 50 KB. Our tool automatically compresses to the exact range.</li>
                    <li><strong>Wrong background:</strong> Dark, patterned, or coloured backgrounds are not accepted. Always use a plain white or light grey background.</li>
                    <li><strong>Photo too old:</strong> Using a photo from a previous exam cycle (even if it looks fine) can cause problems if your appearance has changed significantly.</li>
                    <li><strong>Block letter signature:</strong> Writing your name in block letters (CAPITAL LETTERS) is not a valid signature. You must use a cursive/running hand style.</li>
                </ul>

                <h2>How to Resize Using ExamResizer</h2>
                <ol>
                    <li>Go to the <Link href="/resize/rrb">RRB Resizer Tool</Link>.</li>
                    <li>Upload your photo or scanned signature — any format, any size.</li>
                    <li>Use the interactive crop guide to align your face or signature correctly within the frame.</li>
                    <li>The tool automatically sets the correct dimensions (35mm × 45mm) and compresses to 20–50 KB.</li>
                    <li>Click <strong>Download</strong> and upload directly to the RRB application portal.</li>
                </ol>
                <p>
                    All processing happens locally in your browser. <strong>No images are sent to any server</strong>, ensuring complete privacy for your sensitive identity documents.
                </p>

                <h2>Official Sources &amp; References</h2>
                <ul>
                    <li><strong>RRB Official Websites:</strong> Each regional RRB has its own website (e.g., <a href="https://rrbcdg.gov.in" target="_blank" rel="noopener noreferrer">rrbcdg.gov.in</a> for RRB Chandigarh, <a href="https://rrbchennai.gov.in" target="_blank" rel="noopener noreferrer">rrbchennai.gov.in</a> for RRB Chennai)</li>
                    <li><strong>Indian Railways:</strong> <a href="https://indianrailways.gov.in" target="_blank" rel="noopener noreferrer">indianrailways.gov.in</a></li>
                    <li><strong>Guidelines:</strong> Available in the CEN (Centralized Employment Notice) PDF for each recruitment drive.</li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with any Railway Recruitment Board or Indian Railways. This guide is based on publicly available official notifications and the Centralized Employment Notices (CENs). Always refer to the latest CEN for your specific recruitment drive.</em>
                </p>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/rrb">Resize for RRB Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
