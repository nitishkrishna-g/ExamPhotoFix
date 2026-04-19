import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "10 Reasons Your Exam Photo Gets Rejected (And How to Fix Each One) | ExamResizer",
    description: "Comprehensive list of the most common reasons government exam photos and signatures are rejected. Covers wrong file size, dimensions, format, blurry images, wrong background, selfies, and more — with solutions for each.",
    alternates: {
        canonical: '/guides/photo-rejection-reasons',
    },
    openGraph: {
        title: "10 Reasons Your Exam Photo Gets Rejected (And How to Fix Each One)",
        description: "Common photo rejection reasons for UPSC, SSC, IBPS, and RRB with expert solutions.",
        url: '/guides/photo-rejection-reasons',
        type: 'article',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why does the government exam portal keep rejecting my photo?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most common reasons are: wrong pixel dimensions, file size outside the allowed range (too large or too small), wrong file format (PNG instead of JPEG), coloured/non-white background, selfie instead of passport-style photo, or missing Date on Photo for SSC exams. Check each specification against the official notification."
            }
        },
        {
            "@type": "Question",
            "name": "How do I fix a photo that's too large for the exam portal?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reduce the JPEG quality setting when saving. Most photo editors allow you to set quality between 1-100. Start at 80% and reduce until the file size falls within the required range. Alternatively, use ExamResizer which automatically compresses to the exact KB range for each exam."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Reasons Your Exam Photo Gets Rejected (And How to Fix Each One)",
    "description": "Comprehensive guide to photo rejection reasons in Indian government exam applications.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-03-15",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/photo-rejection-reasons" }
};

export default function RejectionReasonsGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="rejection-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="rejection-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>10 Reasons Your Exam Photo Gets Rejected (And How to Fix Each One)</h1>
                <p className="lead">
                    Every year, lakhs of government exam applications are rejected due to photo and signature issues. These rejections are entirely preventable. Here are the 10 most common reasons — ranked by frequency — and exactly how to fix each one.
                </p>

                <div className="not-prose bg-red-50 dark:bg-red-950/30 p-6 rounded-lg my-6 border-l-4 border-red-600">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">
                        <strong>Important:</strong> Application fees for most government exams (₹100–₹500) are non-refundable. A rejected application due to a photo error means you lose both the fee and the opportunity. The 10 minutes spent getting your photo right is worth it.
                    </p>
                </div>

                <h2>1. Wrong File Size (Too Large or Too Small)</h2>
                <p>
                    <strong>The Problem:</strong> This is the #1 rejection reason across all exams. Each exam portal specifies an exact KB range — for example, IBPS requires 20–50 KB, SSC requires 20–50 KB for photos and 10–20 KB for signatures, and UPSC allows 20–300 KB. A file even 1 KB outside this range triggers rejection.
                </p>
                <p>
                    <strong>Why It Happens:</strong> A standard smartphone photo is 3–5 MB (3,000–5,000 KB). When candidates use basic tools to &quot;compress&quot; an image, they often overshoot or undershoot the target range.
                </p>
                <p>
                    <strong>The Fix:</strong> Use <Link href="/tools">ExamResizer</Link> which automatically compresses to the exact KB range for your target exam. Our adaptive compression algorithm adjusts quality in real-time to hit the sweet spot between file size and image clarity.
                </p>

                <h2>2. Wrong Pixel Dimensions</h2>
                <p>
                    <strong>The Problem:</strong> UPSC requires exactly 350×350 pixels, IBPS requires 200×230 pixels, and other exams have their own specific dimensions. Even a 1-pixel difference can cause rejection.
                </p>
                <p>
                    <strong>Why It Happens:</strong> Many candidates use generic photo editors that resize to approximate dimensions (e.g., 348×350 vs 350×350). Others confuse millimeters with pixels — &quot;35×45mm&quot; is NOT the same as &quot;35×45 pixels.&quot;
                </p>
                <p>
                    <strong>The Fix:</strong> Use an exam-specific resizer that is pre-configured with the exact pixel dimensions. Never manually type in dimensions — select your exam and let the tool handle it.
                </p>

                <h2>3. Wrong File Format</h2>
                <p>
                    <strong>The Problem:</strong> Almost all government exam portals accept ONLY JPEG/JPG format. PNG, BMP, HEIC (iPhone default), and WebP files are rejected — often silently (no error message).
                </p>
                <p>
                    <strong>Why It Happens:</strong> iPhones save photos in HEIC format by default. Screenshots are saved as PNG. Many candidates simply rename &quot;photo.png&quot; to &quot;photo.jpg&quot; — but renaming the file extension does NOT convert the format. The portal checks the actual file header, not the name.
                </p>
                <p>
                    <strong>The Fix:</strong> If on iPhone, go to Settings → Camera → Formats → select &quot;Most Compatible&quot; (saves as JPEG). Otherwise, use a proper converter or ExamResizer which converts any format to JPEG automatically.
                </p>

                <h2>4. Coloured or Non-White Background</h2>
                <p>
                    <strong>The Problem:</strong> Most government exams require a plain white background. Blue backgrounds (common in Indian studios), grey backgrounds, textured backgrounds, and outdoor/environmental backgrounds are not accepted.
                </p>
                <p>
                    <strong>Why It Happens:</strong> Many photo studios in India default to a blue background for ID photos. Candidates use these without realizing the exam specifically requires white. Some portals have automated background colour detection.
                </p>
                <p>
                    <strong>The Fix:</strong> When visiting a studio, explicitly ask for a &quot;white background passport photo.&quot; If you only have a blue-background photo, some advanced tools can change the background, but it&apos;s better to simply retake it against a white wall.
                </p>

                <h2>5. Selfie Instead of Passport-Style Photo</h2>
                <p>
                    <strong>The Problem:</strong> Selfies are taken at arm&apos;s length (about 50–60 cm from the face) with a wide-angle phone lens. This creates barrel distortion — your nose appears larger, your face appears wider, and your ears appear smaller than they actually are. Professional passport photos are taken from at least 1–1.5 meters away with a normal lens.
                </p>
                <p>
                    <strong>Why It Happens:</strong> Convenience. Taking a selfie is faster than visiting a photo studio. But the distortion is significant enough that automated facial recognition systems and manual verifiers can flag the mismatch.
                </p>
                <p>
                    <strong>The Fix:</strong> Visit a photo studio (costs ₹50–₹100 including digital copy). If you absolutely cannot visit a studio, have someone else take your photo from at least 1.5 meters away against a white wall, using the phone&apos;s rear camera (not the front/selfie camera).
                </p>

                <h2>6. Blurry or Low-Resolution Image</h2>
                <p>
                    <strong>The Problem:</strong> When a small or low-resolution source image is enlarged to the required pixel dimensions, it becomes blurry and pixelated. This is especially common with signatures — a phone photo of a signature, when compressed to 10–20 KB, can become completely illegible.
                </p>
                <p>
                    <strong>The Fix:</strong> Always start with the highest resolution source image possible. Scan at 300 DPI. Take photos in the camera&apos;s maximum resolution. Then <em>resize down</em> to the required dimensions — never resize up.
                </p>

                <h2>7. Missing Date on Photo (SSC Specific)</h2>
                <p>
                    <strong>The Problem:</strong> SSC uniquely requires the Date of Photograph (DOP) to be printed on the uploaded photo in DD/MM/YYYY format. The date must be within 3 months of the notification date. Photos without DOP are rejected during scrutiny.
                </p>
                <p>
                    <strong>Why It Happens:</strong> Candidates who have applied for UPSC or IBPS (which don&apos;t require DOP) assume SSC has the same rules. Some candidates add the date using MS Paint in low quality.
                </p>
                <p>
                    <strong>The Fix:</strong> Use the <Link href="/resize/ssc">SSC Resizer</Link> which has a built-in &quot;Add Name &amp; Date&quot; toggle that overlays the current date in the correct format and font size.
                </p>

                <h2>8. Incorrect Aspect Ratio</h2>
                <p>
                    <strong>The Problem:</strong> Each exam requires a specific aspect ratio — UPSC needs 1:1 (square), IBPS needs approximately 20:23, and SSC/RRB need 7:9 (passport ratio). Uploading a photo with the wrong aspect ratio causes stretching, distortion, or cropping by the portal.
                </p>
                <p>
                    <strong>The Fix:</strong> Crop your photo to the correct aspect ratio <em>before</em> resizing to the final pixel dimensions. Use an exam-specific tool that includes visual crop guides showing the correct proportions.
                </p>

                <h2>9. Wearing Prohibited Items</h2>
                <p>
                    <strong>The Problem:</strong> Most government exams prohibit: sunglasses, tinted lenses, caps, hats (non-religious headgear), face masks, and excessive jewelry that obscures facial features. Some also flag heavy makeup or beauty filters.
                </p>
                <p>
                    <strong>The Fix:</strong> Remove all non-essential items. Regular prescription spectacles are allowed if your eyes are clearly visible. Religious head coverings (turban, hijab) are permitted but your face must be fully visible from forehead to chin.
                </p>

                <h2>10. Old or Outdated Photograph</h2>
                <p>
                    <strong>The Problem:</strong> Most exams require a &quot;recent photograph&quot; — typically taken within the last 3–6 months. At the exam centre, your uploaded photo is compared against your physical appearance. If you&apos;ve lost/gained significant weight, changed hairstyle, grown/shaved a beard, or look noticeably different, you may be questioned.
                </p>
                <p>
                    <strong>The Fix:</strong> Take a fresh photo for each new exam cycle. Even if the previous year&apos;s photo passes the portal validation, it may cause issues during physical verification.
                </p>

                <h2>Bonus: Signature-Specific Rejection Reasons</h2>
                <ul>
                    <li><strong>Block letters:</strong> Writing your name in CAPITAL LETTERS is not a valid signature. Use cursive/running hand.</li>
                    <li><strong>Different signatures:</strong> Your uploaded signature looks different from what you sign on the answer sheet. Practice consistency.</li>
                    <li><strong>Lined paper visible:</strong> You signed on notebook paper and the blue lines appear in the scan. Use plain white A4 paper.</li>
                    <li><strong>Signature too thick:</strong> Using a felt-tip marker or thick marker makes the signature appear as a blob after compression. Use a 0.5–0.7mm gel or ballpoint pen.</li>
                    <li><strong>Multiple signatures:</strong> You accidentally uploaded an image showing multiple signature attempts. Crop to show only one signature.</li>
                </ul>

                <h2>Prevention Is Better Than Correction</h2>
                <p>
                    While most exam portals offer a &quot;correction window&quot; (typically 3–7 days) to fix errors, it&apos;s not guaranteed for all issues, and it causes unnecessary stress. The best approach is to get it right the first time by:
                </p>
                <ol>
                    <li>Reading the official notification&apos;s &quot;Instructions to Candidates&quot; section carefully.</li>
                    <li>Using exam-specific tools (not generic photo editors) that are pre-configured with the correct specifications.</li>
                    <li>Verifying your uploaded documents by downloading them from the portal after submission and checking that they look correct.</li>
                </ol>

                <p>
                    <em>ExamResizer.in processes all images locally in your browser — no server uploads, ensuring complete privacy for your identity documents.</em>
                </p>

                <div className="mt-12 text-center not-prose flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/tools">Fix Your Photo Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/guides/how-to-scan-signature">Signature Scanning Guide →</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
