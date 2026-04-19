import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "NEET & JEE Photo & Signature Requirements 2026 — NTA Guidelines | ExamResizer",
    description: "Complete guide to photo and signature requirements for NEET UG, JEE Main, and JEE Advanced 2026. NTA official specifications, postcard-size photo rules, admit card photo guidelines, and step-by-step instructions.",
    alternates: {
        canonical: '/guides/neet-jee-photo-guidelines',
    },
    openGraph: {
        title: "NEET & JEE Photo & Signature Requirements 2026 — NTA Guidelines",
        description: "Official photo specifications for NEET UG, JEE Main, and JEE Advanced applications.",
        url: '/guides/neet-jee-photo-guidelines',
        type: 'article',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the photo dimensions for NEET UG 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "NEET UG 2026 requires a photograph between 10 KB and 200 KB in JPG/JPEG format. The photo should be a recent passport-size photograph (3.5cm x 4.5cm) with a white background. Additionally, NTA requires a postcard-size photograph (4 inches x 6 inches) for the application form."
            }
        },
        {
            "@type": "Question",
            "name": "What is the postcard-size photo for NEET?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "NTA requires a postcard-size (4\"x6\" or 10cm x 15cm) colour photograph for NEET applications. This larger photo is used for identity verification at the exam centre. It should show you from the waist up, against a white background, with your name and date written at the bottom."
            }
        },
        {
            "@type": "Question",
            "name": "Are JEE Main and JEE Advanced photo requirements the same?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, they differ slightly. JEE Main (conducted by NTA) requires a passport-size photo (10-200 KB) in JPEG format with a white background. JEE Advanced (conducted by IITs) may have slightly different specifications mentioned in their specific notification. Always check the official JEE Advanced website for the latest requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need a Date on Photo for NEET or JEE?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "NTA recommends (but does not strictly mandate like SSC) having the candidate's name and date on the photograph. For the postcard-size photo, writing your name and date at the bottom is typically required. For the passport-size digital upload, it is optional but recommended."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NEET & JEE Photo & Signature Requirements 2026",
    "description": "Complete NTA guidelines for photo and signature uploads for NEET UG, JEE Main, and JEE Advanced.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-03-20",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/neet-jee-photo-guidelines" }
};

export default function NeetJeeGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="neet-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="neet-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>NEET &amp; JEE Photo &amp; Signature Requirements 2026 — NTA Guidelines</h1>
                <p className="lead">
                    A comprehensive guide to photo, signature, and postcard image requirements for NEET UG, JEE Main, and JEE Advanced 2026. Covers NTA&apos;s official specifications, the unique postcard-size requirement, and step-by-step preparation.
                </p>

                <h2>Which Exams Does This Cover?</h2>
                <p>
                    The National Testing Agency (NTA) conducts several major entrance examinations for higher education in India. This guide covers:
                </p>
                <ul>
                    <li><strong>NEET UG (National Eligibility cum Entrance Test)</strong> — For MBBS, BDS, AYUSH, and nursing admissions</li>
                    <li><strong>JEE Main</strong> — For admission to NITs, IIITs, and CFTIs</li>
                    <li><strong>JEE Advanced</strong> — For admission to IITs (conducted by IITs, not NTA, but application requires photo upload)</li>
                    <li><strong>CUET UG/PG (Common University Entrance Test)</strong> — For central university admissions</li>
                </ul>
                <p>
                    NEET and JEE Main use the same NTA portal (nta.ac.in / jeemain.nta.nic.in / neet.nta.nic.in) with similar upload requirements. JEE Advanced uses a separate IIT-managed portal which may have slightly different specs each year.
                </p>

                <h2>NEET UG Photo Specifications</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">Passport-Size Photo (Digital Upload)</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Size:</strong> 3.5 cm × 4.5 cm (passport-size format).</li>
                        <li><strong>File Size:</strong> 10 KB to 200 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Background:</strong> White background only.</li>
                        <li><strong>Face Coverage:</strong> Face should cover 60–70% of the frame.</li>
                        <li><strong>Name &amp; Date:</strong> Candidate&apos;s name and date of photograph printed at the bottom (recommended).</li>
                        <li><strong>Ears Visible:</strong> Both ears must be visible in the photo.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">Postcard-Size Photo (Special NTA Requirement)</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Size:</strong> 4 inches × 6 inches (approximately 10 cm × 15 cm).</li>
                        <li><strong>File Size:</strong> 50 KB to 300 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Content:</strong> Photo from waist up, showing full face and upper body.</li>
                        <li><strong>Background:</strong> White background.</li>
                        <li><strong>Text:</strong> Candidate&apos;s name and date of photograph written clearly at the bottom of the photo.</li>
                    </ul>
                </div>

                <h2>Understanding the Postcard-Size Photo</h2>
                <p>
                    The postcard-size (4&quot;×6&quot;) photo is a requirement unique to NTA exams, particularly NEET UG. This is different from the standard passport-size digital upload and causes significant confusion among candidates.
                </p>
                <p>
                    <strong>What it is:</strong> A larger photograph (similar in size to a regular photo print you get from a studio) that shows you from the waist up. Unlike the passport-size close-up, this photo shows more of your body for additional identity verification.
                </p>
                <p>
                    <strong>How to get it:</strong> Visit a photo studio and ask for a &quot;4×6 postcard photo on white background, waist-up.&quot; The studio should provide both a physical print and the digital file. You upload the digital file to the NTA portal.
                </p>
                <p>
                    <strong>Key rules:</strong>
                </p>
                <ul>
                    <li>The photo must show you from the waist up — not just your face.</li>
                    <li>Your hands should be naturally at your sides (not crossed, not in pockets).</li>
                    <li>White or very light background only.</li>
                    <li>Write your name and the date of the photograph at the bottom in clear handwriting or printed text.</li>
                    <li>The same photo must be carried to the exam centre for verification.</li>
                </ul>

                <h2>Signature Specifications for NTA Exams</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-amber-600">
                    <h3 className="text-lg font-bold mb-2">Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>File Size:</strong> 4 KB to 30 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Black ink on white paper.</li>
                        <li><strong>Style:</strong> Running hand (cursive) only.</li>
                        <li><strong>Note:</strong> Thumb impression is accepted for candidates who cannot sign (with documentation).</li>
                    </ul>
                </div>

                <h2>JEE Main Specifications</h2>
                <p>
                    JEE Main, also conducted by NTA, has specifications similar to NEET with some differences:
                </p>
                <ul>
                    <li><strong>Photo:</strong> Passport-size (3.5×4.5cm), 10–200 KB, JPEG, white background. Same as NEET.</li>
                    <li><strong>Signature:</strong> 4–30 KB, JPEG, black ink on white paper. Same as NEET.</li>
                    <li><strong>Postcard photo:</strong> May or may not be required — check the specific JEE Main notification for your session.</li>
                    <li><strong>Category certificate:</strong> SC/ST/OBC candidates may also need to upload a scanned copy of their category certificate.</li>
                </ul>

                <h2>JEE Advanced Specifications</h2>
                <p>
                    JEE Advanced is conducted by a consortium of IITs (the conducting IIT rotates each year). The registration portal and specifications can differ from NTA exams:
                </p>
                <ul>
                    <li>Photo specifications are released in the JEE Advanced Information Bulletin each year.</li>
                    <li>Generally follows passport-size standards with JPEG format requirements.</li>
                    <li>The conducting IIT may specify pixel dimensions (which vary by year).</li>
                    <li><strong>Always check the official JEE Advanced website</strong> (<a href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer">jeeadv.ac.in</a>) for the latest specific requirements.</li>
                </ul>

                <h2>How NTA Exams Differ from Government Job Exams</h2>
                <div className="not-prose overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 text-left border-b font-semibold">Specification</th>
                                <th className="p-3 text-left border-b font-semibold">NEET/JEE (NTA)</th>
                                <th className="p-3 text-left border-b font-semibold">UPSC</th>
                                <th className="p-3 text-left border-b font-semibold">SSC</th>
                                <th className="p-3 text-left border-b font-semibold">IBPS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Photo File Size</td>
                                <td className="p-3">10–200 KB</td>
                                <td className="p-3">20–300 KB</td>
                                <td className="p-3">20–50 KB</td>
                                <td className="p-3">20–50 KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Signature Size</td>
                                <td className="p-3">4–30 KB</td>
                                <td className="p-3">20–300 KB</td>
                                <td className="p-3">10–20 KB</td>
                                <td className="p-3">10–20 KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Postcard Photo</td>
                                <td className="p-3 font-bold text-blue-600">Required (NEET)</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Not Required</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3">Thumb Impression</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Not Required</td>
                                <td className="p-3">Required</td>
                            </tr>
                            <tr>
                                <td className="p-3">Date on Photo</td>
                                <td className="p-3">Recommended</td>
                                <td className="p-3">Optional</td>
                                <td className="p-3 font-bold text-orange-600">Mandatory</td>
                                <td className="p-3">Not Required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Common Mistakes for NEET/JEE Applicants</h2>
                <ul>
                    <li><strong>Confusing passport-size with postcard-size:</strong> These are two different photos. Passport-size (3.5×4.5cm) is a close-up face shot. Postcard-size (4×6 inches) is a waist-up body photo. Both are required for NEET.</li>
                    <li><strong>Using old photos:</strong> Students often reuse photos from their school ID or previous year applications. NTA requires recent photos (within 3 months).</li>
                    <li><strong>Cropping issues:</strong> Candidates crop the postcard photo too tightly, making it look like a passport photo. The postcard must show waist-up.</li>
                    <li><strong>Signature in block letters:</strong> Especially common among Class 12 students who haven&apos;t developed a cursive signature yet. Start practising now — you&apos;ll need a consistent signature throughout your career.</li>
                    <li><strong>Photo from NEET used for JEE Advanced:</strong> While the photos may look similar, the pixel dimensions and file size limits can differ. Resize separately for each exam.</li>
                </ul>

                <h2>How to Resize Using ExamResizer</h2>
                <ol>
                    <li>Go to <Link href="/tools">our NEET/JEE tools</Link>.</li>
                    <li>Select your exam — NEET UG, JEE Main, or use the custom resizer for JEE Advanced specifications.</li>
                    <li>Upload your photo, signature, or postcard image.</li>
                    <li>Use the crop tool to frame your face/body correctly.</li>
                    <li>Click <strong>Download</strong> — automatically sized and compressed to match NTA specifications.</li>
                </ol>
                <p>
                    All processing is done locally in your browser — <strong>your images never leave your device</strong>.
                </p>

                <h2>Official Sources &amp; References</h2>
                <ul>
                    <li><strong>NTA Official Website:</strong> <a href="https://nta.ac.in" target="_blank" rel="noopener noreferrer">nta.ac.in</a></li>
                    <li><strong>NEET UG:</strong> <a href="https://neet.nta.nic.in" target="_blank" rel="noopener noreferrer">neet.nta.nic.in</a></li>
                    <li><strong>JEE Main:</strong> <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer">jeemain.nta.nic.in</a></li>
                    <li><strong>JEE Advanced:</strong> <a href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer">jeeadv.ac.in</a></li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with NTA, any IIT, or any government organization. This guide is based on publicly available official notifications and information bulletins. Always refer to the latest official notification for your specific exam session.</em>
                </p>

                <div className="mt-12 text-center not-prose flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/tools">Resize for NEET/JEE Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/guides/photo-rejection-reasons">Why Photos Get Rejected →</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
