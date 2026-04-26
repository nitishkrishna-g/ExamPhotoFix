import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Live Photo Capture Guide for Indian Exams 2026 — UPSC, SSC, NEET, CUET | ExamResizer",
    description: "Complete guide to completing the Live Photo Capture requirement for UPSC, SSC, NEET UG, JEE Main, and CUET 2026. Webcam setup, lighting, troubleshooting, and what to do if your live photo is rejected.",
    alternates: {
        canonical: '/guides/live-photo-capture-guide',
    },
    openGraph: {
        title: "Live Photo Capture Guide for Indian Exams 2026 — UPSC, SSC, NEET, CUET",
        description: "How to complete the new live webcam photo requirement for UPSC, SSC, NEET, and CUET 2026 without getting your application rejected.",
        url: '/guides/live-photo-capture-guide',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Live Photo Capture Guide 2026 — UPSC, SSC, NEET, CUET",
        description: "Step-by-step guide to the new live webcam photo requirement for Indian government and entrance exams.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is a live photo capture in exam applications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A live photo capture is a real-time webcam or mobile camera photograph taken during the online application process. Unlike traditional photo uploads (where you can submit any JPEG file), the live photo must be captured in the browser at the time of filling the form. It is used for AI-based identity verification and cannot be edited or replaced after capture."
            }
        },
        {
            "@type": "Question",
            "name": "Which exams require a live photo in 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As of 2026, the following major exams require live photo capture: UPSC Civil Services, SSC CGL/CHSL/MTS/GD, NEET UG (with Aadhaar eKYC), and CUET (with AI-based identity verification). Some state PSC exams are also gradually adopting this feature."
            }
        },
        {
            "@type": "Question",
            "name": "What happens if my live photo doesn't match my uploaded photo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If the AI system detects a mismatch between your live photo and your uploaded scanned photo, you may be asked to complete an additional identity verification step. In serious cases, your application may be flagged for manual review. This is why your uploaded photo should closely reflect your current appearance — avoid using old photos or photos with very different hairstyles/facial hair from how you currently look."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use a phone instead of a webcam for live photo capture?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, most exam portals that implement live photo capture support both webcam (laptop/desktop) and front-facing phone camera (mobile browser). The NEET portal works on both. For best results, use the front-facing camera in a well-lit room and hold the phone at eye level."
            }
        },
        {
            "@type": "Question",
            "name": "Does live photo capture replace the traditional scanned photo upload?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. For all exams that currently implement live photo capture (UPSC, SSC, NEET, CUET), you still need to separately upload a scanned photograph and signature meeting the official file size and dimension requirements. The live photo is an additional step, not a replacement."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Live Photo Capture Guide for Indian Exams 2026",
    "description": "How to complete the new live webcam photo requirement for UPSC, SSC, NEET UG, and CUET without getting your application rejected.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-27",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/live-photo-capture-guide" }
};

export default function LivePhotoGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="live-photo-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="live-photo-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>Live Photo Capture for Indian Exams 2026 — Complete Guide</h1>
                <p className="lead">
                    A growing number of Indian government and entrance exams now require a &quot;live photo&quot; captured via webcam during the online application. This guide explains exactly what it is, which exams require it, how to prepare your environment, and what to do if it fails or gets rejected.
                </p>

                <h2>What Is a Live Photo Capture?</h2>
                <p>
                    A live photo capture is fundamentally different from the traditional scanned photo upload. When you upload a scanned photo, you are submitting a pre-existing JPEG file that you prepared beforehand. A live photo, on the other hand, is taken in real-time through your device&apos;s camera while you are filling out the application form on the exam portal.
                </p>
                <p>
                    The portal activates your webcam or phone camera, displays a live preview of your face, and then captures a still photograph. You cannot edit, crop, filter, or replace this image after capture. It is stored directly against your application and used by the exam authority&apos;s AI-based identity verification system to:
                </p>
                <ul>
                    <li>Match your live appearance against the scanned photo you upload</li>
                    <li>Verify identity during admit card generation</li>
                    <li>Cross-check against the invigilator&apos;s records on exam day</li>
                </ul>
                <p>
                    The introduction of live photo capture is part of a broader effort by exam authorities to combat impersonation, which has historically been a significant problem in large-scale recruitment exams.
                </p>

                <h2>Which Exams Require Live Photo Capture in 2026?</h2>

                <div className="not-prose overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 text-left border-b font-semibold">Exam</th>
                                <th className="p-3 text-left border-b font-semibold">Live Photo Required?</th>
                                <th className="p-3 text-left border-b font-semibold">Additional Feature</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">UPSC Civil Services / NDA / CDS</td>
                                <td className="p-3 text-green-600 font-bold">Yes</td>
                                <td className="p-3">Matched against uploaded scanned photo</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">SSC CGL / CHSL / MTS / GD</td>
                                <td className="p-3 text-green-600 font-bold">Yes</td>
                                <td className="p-3">Webcam capture via SSC portal</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">NEET UG 2026</td>
                                <td className="p-3 text-green-600 font-bold">Yes</td>
                                <td className="p-3">Aadhaar eKYC integration</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">CUET UG / PG 2026</td>
                                <td className="p-3 text-green-600 font-bold">Yes</td>
                                <td className="p-3">AI-based identity verification</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">IBPS PO / Clerk</td>
                                <td className="p-3 text-muted-foreground">Not yet</td>
                                <td className="p-3">Traditional upload only</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">RRB NTPC / Group D</td>
                                <td className="p-3 text-muted-foreground">Not yet</td>
                                <td className="p-3">Traditional upload only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Note: Some state PSC exams (TNPSC, MPSC, UPPSC) are piloting live photo features. Always check the specific notification for your exam and cycle.
                </p>

                <h2>Important: Live Photo Does NOT Replace the Scanned Upload</h2>
                <p>
                    This is the most common misconception. Candidates assume that because they completed the live photo capture, they do not need to upload a separate scanned photo. <strong>This is incorrect.</strong>
                </p>
                <p>
                    For every exam that currently uses live photo capture, you are still required to:
                </p>
                <ol>
                    <li>Upload a scanned JPEG photograph meeting the official pixel dimensions and file size limits</li>
                    <li>Upload a scanned JPEG signature</li>
                    <li>Complete the live photo capture as a separate step</li>
                </ol>
                <p>
                    Use ExamResizer.in to prepare the scanned uploads, and then complete the live capture separately on the portal.
                </p>

                <h2>How to Prepare for Live Photo Capture</h2>
                <p>
                    Since you cannot edit the live photo after it is taken, preparation beforehand is critical. Here is a checklist to follow before opening the application portal:
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-3">Environment Setup Checklist</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Lighting:</strong> Sit facing a natural light source (window) or a bright lamp placed in front of you, not behind you. Back-lighting creates dark shadows on your face, which makes the AI matching less accurate.</li>
                        <li><strong>Background:</strong> Sit against a plain, light-coloured wall — ideally white or off-white. Avoid patterned wallpaper, curtains, posters, or other people in the background.</li>
                        <li><strong>Camera angle:</strong> The camera should be at eye level. If using a laptop, ensure it is not tilted downward (which shows the top of your head) or upward (which shows your chin). Stack books under the laptop if needed.</li>
                        <li><strong>Appearance:</strong> Look the same as you do in your uploaded scanned photo. Do not add or remove glasses, change hairstyle significantly, or wear heavy makeup that wasn&apos;t in the uploaded photo.</li>
                        <li><strong>Browser:</strong> Use Google Chrome or Mozilla Firefox. Safari and Edge may have camera permission issues on some exam portals.</li>
                        <li><strong>Camera permission:</strong> Allow camera access when the browser asks. If you accidentally blocked it, go to browser settings → Site Settings → Camera → Allow.</li>
                    </ul>
                </div>

                <h2>Step-by-Step: Completing Live Photo Capture</h2>
                <p>
                    While the exact interface varies by exam portal, the general process is the same:
                </p>
                <ol>
                    <li>
                        <strong>Reach the photo section of the application form.</strong> On UPSC, this is typically in the &quot;Upload Documents&quot; step. On NEET/SSC, it is integrated into the registration process.
                    </li>
                    <li>
                        <strong>Click &quot;Capture Live Photo&quot; or &quot;Start Webcam.&quot;</strong> Your browser will ask for camera permission — click Allow.
                    </li>
                    <li>
                        <strong>Wait for the live preview to load.</strong> You should see yourself on screen. Adjust your position so your face fills the frame — approximately 70–80% of the frame should be your face.
                    </li>
                    <li>
                        <strong>Check the frame before capturing.</strong> Confirm: white background, even lighting on face, eyes open, neutral expression, no glasses.
                    </li>
                    <li>
                        <strong>Click Capture.</strong> Review the preview image shown. Most portals allow you to retake if you are not satisfied — use this opportunity if the lighting or angle is off.
                    </li>
                    <li>
                        <strong>Save and proceed.</strong> Once confirmed, the portal saves the live photo and you cannot change it.
                    </li>
                </ol>

                <h2>Troubleshooting Common Live Photo Problems</h2>

                <ul>
                    <li>
                        <strong>Webcam not activating / black screen:</strong> Check that no other application (Zoom, Teams, etc.) is using the camera. Close all video apps before opening the portal. Restart the browser and try again.
                    </li>
                    <li>
                        <strong>Camera permission denied:</strong> In Chrome, click the camera icon in the address bar → Allow → Reload page. In Firefox, go to the lock icon → Connection is secure → More Information → Permissions → Camera → Allow.
                    </li>
                    <li>
                        <strong>Poor image quality / very dark or grainy capture:</strong> Your webcam quality may be low. Switch to a smartphone browser (Chrome on Android, Safari on iOS) which uses a higher-quality front-facing camera. Most exam portals support mobile browsers.
                    </li>
                    <li>
                        <strong>Face not detected / AI verification failure:</strong> The portal&apos;s face detection may struggle if the lighting is uneven. Move closer to a light source, remove any hats or accessories, and ensure your entire face (forehead to chin) is visible within the frame.
                    </li>
                    <li>
                        <strong>Live photo does not match uploaded photo:</strong> If the system flags a mismatch, NEET and CUET portals provide a window to upload a new photo or complete Aadhaar-based eKYC verification to confirm identity. Check your registered email for the verification link.
                    </li>
                    <li>
                        <strong>Portal crashes during capture:</strong> Do not refresh the page immediately, as this may save a partially captured image. Wait 30 seconds, then log out, clear browser cache (Ctrl+Shift+Delete), log back in, and reattempt.
                    </li>
                </ul>

                <h2>Using a Smartphone Instead of a Webcam</h2>
                <p>
                    If you do not have access to a laptop webcam, a smartphone is often a better option for live photo capture. Smartphone front cameras are typically higher resolution (8–16 MP) compared to built-in laptop webcams (0.9–2 MP), resulting in a sharper capture.
                </p>
                <p>
                    To apply using your phone:
                </p>
                <ol>
                    <li>Open the exam portal in Chrome (Android) or Safari (iPhone) — do not use in-app browsers from WhatsApp or Telegram.</li>
                    <li>Request the desktop site if the portal asks (tap the three-dot menu → Request Desktop Site).</li>
                    <li>When the live capture screen appears, the portal will activate your phone&apos;s front camera automatically.</li>
                    <li>Hold the phone at arm&apos;s length, slightly above eye level, tilted slightly downward toward your face. This angle is more flattering and ensures your full face is captured.</li>
                    <li>Ensure you are in a well-lit area. The rear camera produces better quality but the front camera is usually auto-selected for face-forward captures.</li>
                </ol>

                <h2>What to Do After Live Photo Capture</h2>
                <p>
                    After completing the live capture, do not change your appearance significantly before your exam. The invigilator at the exam centre will compare your physical appearance against both your admit card photo (which comes from the scanned upload) and the live photo stored in the system.
                </p>
                <p>
                    Specifically:
                </p>
                <ul>
                    <li>Do not shave off a beard or grow one unexpectedly between application and exam day</li>
                    <li>Do not significantly change your hairstyle (cutting very long hair, dyeing hair drastically)</li>
                    <li>If you wear glasses in your photos, wear them on exam day too</li>
                    <li>Dress similarly — avoid drastic changes in clothing style from what you wore during the live capture</li>
                </ul>

                <h2>How ExamResizer.in Helps</h2>
                <p>
                    ExamResizer.in handles the scanned photo and signature uploads — the part you prepare before reaching the portal. Use our exam-specific tools to:
                </p>
                <ul>
                    <li>Resize and compress your scanned photo to the exact pixel dimensions and file size required by UPSC, SSC, NEET, or CUET</li>
                    <li>Add Date on Photo (DOP) for SSC automatically</li>
                    <li>Create the UPSC Triple Signature using our signature joiner</li>
                    <li>Generate the NEET postcard-size photo</li>
                </ul>
                <p>
                    All processing happens locally in your browser — <strong>your photos never leave your device</strong>. Once you have the correctly formatted files, proceed to the portal to complete both the upload and the live photo capture steps.
                </p>

                <h2>Quick Links to Exam-Specific Tools</h2>
                <ul>
                    <li><Link href="/resize/upsc">UPSC Photo &amp; Triple Signature Tool</Link></li>
                    <li><Link href="/resize/ssc">SSC Photo with Date-on-Photo Tool</Link></li>
                    <li><Link href="/resize/neet">NEET Passport &amp; Postcard Photo Tool</Link></li>
                    <li><Link href="/tools">All Exam Tools</Link></li>
                </ul>

                <h2>Official Portal Links</h2>
                <ul>
                    <li><strong>UPSC:</strong> <a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer">upsconline.nic.in</a></li>
                    <li><strong>SSC:</strong> <a href="https://ssc.nic.in" target="_blank" rel="noopener noreferrer">ssc.nic.in</a></li>
                    <li><strong>NEET:</strong> <a href="https://neet.nta.nic.in" target="_blank" rel="noopener noreferrer">neet.nta.nic.in</a></li>
                    <li><strong>CUET:</strong> <a href="https://cuet.nta.nic.in" target="_blank" rel="noopener noreferrer">cuet.nta.nic.in</a></li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with UPSC, SSC, NTA, or any government organization. This guide is based on publicly available official notifications. Always verify requirements against the latest official notification for your specific exam.</em>
                </p>

                <div className="mt-12 text-center not-prose flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/tools">Prepare Your Scanned Photos</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/guides/photo-rejection-reasons">Common Rejection Reasons →</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
