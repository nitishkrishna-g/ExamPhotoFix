import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "UPSC Photo Resize Guide 2026 — Exact Dimensions for IAS, IPS & NDA | ExamResizer",
    description: "Complete guide to resizing photos and signatures for UPSC Civil Services 2026. Official dimensions (350x350px), file size limits (20-300KB), scanning tips, common mistakes, and step-by-step formatting instructions.",
    alternates: {
        canonical: '/guides/upsc-photo-resize',
    },
    openGraph: {
        title: "UPSC Photo Resize Guide 2026 — Exact Dimensions for IAS, IPS & NDA",
        description: "Complete guide to resizing photos and signatures for UPSC Civil Services 2026. Official dimensions, file size limits, and expert formatting tips.",
        url: '/guides/upsc-photo-resize',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "UPSC Photo Resize Guide 2026",
        description: "Official photo dimensions, file size limits, and expert formatting tips for UPSC IAS/IPS/NDA applications.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the exact photo dimensions for UPSC 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "UPSC Civil Services (IAS/IPS) and NDA 2026 require photographs of exactly 350 x 350 pixels (square, 1:1 aspect ratio), in JPG/JPEG format, with a file size between 20 KB and 300 KB. The background must be plain white."
            }
        },
        {
            "@type": "Question",
            "name": "What happens if I upload the wrong photo size to UPSC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The UPSC portal validates uploads in real-time. If your photo does not meet the exact pixel dimensions (350x350) or exceeds the file size limit (20-300KB), the portal will display an error message and prevent you from submitting the form. In some cases, a slightly off-spec photo may upload but get flagged during manual scrutiny, leading to form rejection."
            }
        },
        {
            "@type": "Question",
            "name": "Can I use a passport-size photo for UPSC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A standard passport-size photo is 35mm x 45mm (3.5cm x 4.5cm), which is a rectangular 7:9 aspect ratio. UPSC requires a square 350x350 pixel photo (1:1 ratio). You must crop your passport photo to a square format and resize it to exactly 350x350 pixels."
            }
        },
        {
            "@type": "Question",
            "name": "How do I scan my signature for UPSC?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sign with black ink on a clean white A4 sheet. Scan at 300 DPI or use a phone with good lighting (no shadows). Crop tightly around the signature, leaving a small white margin. The final image must be 350x350 pixels, between 20-300 KB, in JPG format."
            }
        },
        {
            "@type": "Question",
            "name": "Is it mandatory to have a white background in UPSC photos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, UPSC strictly requires a plain white background for the uploaded photograph. Photos with coloured, textured, or outdoor backgrounds will be rejected. Visit a professional studio if needed, or use a white wall as the backdrop."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Resize Photo & Signature for UPSC Civil Services 2026",
    "description": "Complete guide to formatting your documents for IAS, IPS, IFS, and NDA exams according to the latest official notification.",
    "author": {
        "@type": "Organization",
        "name": "ExamResizer.in"
    },
    "publisher": {
        "@type": "Organization",
        "name": "ExamResizer.in",
        "url": "https://examresizer.vercel.app"
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://examresizer.vercel.app/guides/upsc-photo-resize"
    }
};

export default function UpscGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="upsc-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="upsc-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo &amp; Signature for UPSC Civil Services 2026</h1>
                <p className="lead">
                    A complete, step-by-step guide to formatting your photograph and signature for IAS, IPS, IFS, and NDA exams according to the latest official UPSC notification. Updated for the 2026 exam cycle.
                </p>

                <h2>Who Needs This Guide?</h2>
                <p>
                    If you are applying for any of the following UPSC examinations in 2026, this guide is for you:
                </p>
                <ul>
                    <li><strong>UPSC Civil Services (IAS/IPS/IFS)</strong> — Preliminary and Mains registration</li>
                    <li><strong>NDA (National Defence Academy)</strong> — Both NDA I and NDA II</li>
                    <li><strong>CDS (Combined Defence Services)</strong> — All sessions</li>
                    <li><strong>CAPF (Central Armed Police Forces)</strong> — Assistant Commandant exam</li>
                    <li><strong>IES/ISS (Indian Economic/Statistical Service)</strong></li>
                </ul>
                <p>
                    The Union Public Service Commission (UPSC) uses a unified online application portal (upsconline.nic.in) for all these exams. The photo and signature specifications are identical across all UPSC examinations, making this guide universally applicable.
                </p>

                <h2>Official Photo Dimensions &amp; Size Limits</h2>
                <p>
                    UPSC is extremely strict about document uploads. The application portal performs automated validation, and even a 1-pixel deviation or 1 KB excess can result in your upload being rejected outright. Here are the exact specifications as per the latest official notification:
                </p>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">UPSC Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Format:</strong> JPG / JPEG only. PNG, BMP, and HEIC files are not accepted.</li>
                        <li><strong>File Size:</strong> Minimum 20 KB, Maximum 300 KB.</li>
                        <li><strong>Dimensions:</strong> Exactly 350 pixels (Width) × 350 pixels (Height).</li>
                        <li><strong>Aspect Ratio:</strong> 1:1 (square crop).</li>
                        <li><strong>Background:</strong> Plain White Background — no textures, patterns, or gradients.</li>
                        <li><strong>Face Coverage:</strong> Your face should occupy approximately 3/4th (75%) of the frame.</li>
                        <li><strong>Recency:</strong> Photo must be taken within the last 6 months.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">UPSC Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>File Size:</strong> Minimum 20 KB, Maximum 300 KB.</li>
                        <li><strong>Dimensions:</strong> Exactly 350 pixels (Width) × 350 pixels (Height).</li>
                        <li><strong>Ink:</strong> Black ink on plain white paper. Blue ink is technically accepted but black is strongly recommended for better scan contrast.</li>
                        <li><strong>Style:</strong> Running hand (cursive) signature. Block letters are not permitted.</li>
                    </ul>
                </div>

                <h2>Step-by-Step Photo Preparation</h2>
                <p>
                    Follow this process to ensure your UPSC photo is accepted on the first attempt:
                </p>
                <ol>
                    <li>
                        <strong>Get a professional photograph:</strong> Visit a local photo studio and ask for a &quot;digital passport photo on white background.&quot; Ensure the photographer uses proper lighting to avoid shadows on your face or behind your head. The raw image should be at least 600×600 pixels for best quality after cropping.
                    </li>
                    <li>
                        <strong>Check the background:</strong> The background must be uniformly white. If there are grey patches or shadows, ask the photographer to retake it. UPSC&apos;s automated system can flag non-uniform backgrounds.
                    </li>
                    <li>
                        <strong>Crop to square format:</strong> Most studio photos are rectangular (passport ratio 7:9). You need to crop this to a perfect square (1:1). Centre your face in the frame so it occupies about 75% of the visible area.
                    </li>
                    <li>
                        <strong>Resize to 350×350 pixels:</strong> After cropping, resize the image to exactly 350×350 pixels. Do not simply change the canvas size — this will add borders. Use proper image resampling.
                    </li>
                    <li>
                        <strong>Compress to 20–300 KB:</strong> Save as JPEG with quality between 70–90%. If the file is too large, reduce quality. If too small, increase quality. Our <Link href="/resize/upsc">UPSC Resizer Tool</Link> handles this automatically.
                    </li>
                </ol>

                <h2>How to Scan Your Signature Correctly</h2>
                <p>
                    The signature upload is where most candidates struggle. Here is a proven method:
                </p>
                <ol>
                    <li>
                        <strong>Use the right paper:</strong> Sign on a clean, unlined white A4 sheet. Do not use notebook paper with lines or grid marks, as these will appear in the scan and may cause rejection.
                    </li>
                    <li>
                        <strong>Use black ink:</strong> A black ballpoint or gel pen provides the best contrast for scanning. Avoid felt-tip markers (too thick) or pencils (too faint).
                    </li>
                    <li>
                        <strong>Sign naturally:</strong> Do not enlarge or modify your signature. It should match what you will sign on the exam day and on your admit card.
                    </li>
                    <li>
                        <strong>Scan at 300 DPI:</strong> If using a flatbed scanner, set the resolution to 300 DPI in colour or greyscale mode. If using a phone, ensure the lighting is even with no shadows falling on the paper. Hold the phone directly above the signature, not at an angle.
                    </li>
                    <li>
                        <strong>Crop tightly:</strong> Remove all excess white space around the signature, leaving only a small uniform margin (about 5–10 pixels) on all sides.
                    </li>
                    <li>
                        <strong>Resize and compress:</strong> Resize to 350×350px and compress to 20–300 KB in JPEG format.
                    </li>
                </ol>

                <h2>What Happens If You Upload Wrong Specifications?</h2>
                <p>
                    Understanding the consequences helps you appreciate why precision matters:
                </p>
                <ul>
                    <li>
                        <strong>Immediate rejection by portal:</strong> The UPSC application portal validates file type, dimensions, and size in real-time. If your file doesn&apos;t meet specifications, you will see an error like &quot;Image size should be between 20KB to 300KB&quot; and the upload button will not proceed.
                    </li>
                    <li>
                        <strong>Form saved but flagged:</strong> In rare cases, a marginally off-spec image might upload successfully but get flagged during the manual scrutiny phase. This can lead to your application being rejected weeks later, often after you&apos;ve already paid the fee.
                    </li>
                    <li>
                        <strong>Admit card issues:</strong> Your uploaded photo appears on your UPSC admit card. A blurry, distorted, or incorrectly cropped photo can cause problems at the examination centre during identity verification.
                    </li>
                    <li>
                        <strong>No refund:</strong> UPSC does not refund application fees for rejected forms. Getting the photo right the first time saves you both money and stress.
                    </li>
                </ul>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Using a selfie:</strong> Never use a selfie. Selfies are taken at arm&apos;s length with wide-angle distortion, making your face appear wider than it actually is. Use a professional passport-style photo taken from at least 3 feet away.</li>
                    <li><strong>Blurred images:</strong> Ensure your signature is sharp and scanned in high resolution before resizing. A blurry signature at 350×350px will look illegible on the admit card.</li>
                    <li><strong>Incorrect aspect ratio:</strong> UPSC requires a square (1:1) crop. Do not upload a rectangular photo — it will be stretched or rejected.</li>
                    <li><strong>Wearing glasses:</strong> Avoid wearing dark glasses or sunglasses. Regular prescription spectacles are allowed only if your eyes are clearly visible without glare or reflection.</li>
                    <li><strong>Coloured background:</strong> Blue, grey, or textured backgrounds are not accepted. Only plain white is permitted.</li>
                    <li><strong>Old photograph:</strong> The photo must be recent (within 6 months). Outdated photos may be flagged during document verification at the interview stage.</li>
                    <li><strong>Head coverings:</strong> Religious head coverings are permitted, but your face must be fully visible from forehead to chin. Caps, hats, and non-religious headgear are not allowed.</li>
                </ul>

                <h2>Understanding DPI vs Pixels for UPSC</h2>
                <p>
                    A common source of confusion is the difference between DPI (dots per inch) and pixel dimensions. Here&apos;s what you need to know:
                </p>
                <p>
                    <strong>DPI only matters for printing.</strong> When you upload a digital image to the UPSC portal, only the pixel dimensions (350×350) and file size (20–300 KB) matter. DPI is irrelevant for screen display and digital uploads. However, when <em>scanning</em> your signature or photo, higher DPI (300+) produces a sharper source image, which gives you better quality after resizing.
                </p>
                <p>
                    In practice: scan at 300 DPI, crop, and then resize to 350×350 pixels. The final DPI of the output file does not affect whether UPSC&apos;s portal accepts it.
                </p>

                <h2>How to Resize Using ExamResizer.in</h2>
                <ol>
                    <li>Go to the <Link href="/resize/upsc">UPSC Resizer Tool</Link>.</li>
                    <li>Upload your raw photo or signature — any size, any format.</li>
                    <li>Use the interactive crop tool to align your face within the square guide overlay.</li>
                    <li>Our tool automatically converts to JPEG, resizes to exactly 350×350 pixels, and compresses to the exact KB range.</li>
                    <li>Click <strong>Download</strong> and upload directly to upsconline.nic.in.</li>
                </ol>
                <p>
                    The entire process takes less than 30 seconds. Your photo is processed entirely in your browser — <strong>no images are uploaded to any server</strong>, ensuring complete privacy for your sensitive identity documents.
                </p>

                <h2>Official Sources &amp; References</h2>
                <p>
                    Always verify requirements against the official UPSC notification. Here are the authoritative sources:
                </p>
                <ul>
                    <li><strong>UPSC Official Website:</strong> <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer">upsc.gov.in</a></li>
                    <li><strong>Online Application Portal:</strong> <a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer">upsconline.nic.in</a></li>
                    <li><strong>Photo Guidelines:</strong> Available in the &quot;Instructions to Candidates&quot; section of each exam notification PDF.</li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with UPSC or any government organization. This guide is based on publicly available official notifications and is for informational purposes only. Always refer to the latest official notification for your specific exam.</em>
                </p>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/upsc">Resize for UPSC Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
