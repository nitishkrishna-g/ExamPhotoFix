import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "IBPS & SBI Photo Resize Guide 2026 — PO, Clerk, SO Dimensions & Size Limits | ExamResizer",
    description: "Complete guide to resizing photos, signatures, and left thumb impressions for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, and SBI Clerk exams 2026. Official dimensions, file sizes, scanning tips, and common mistakes.",
    alternates: {
        canonical: '/guides/ibps-photo-resize',
    },
    openGraph: {
        title: "IBPS & SBI Photo Resize Guide 2026",
        description: "Official photo, signature, and thumb impression specifications for all IBPS and SBI banking exams.",
        url: '/guides/ibps-photo-resize',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "IBPS & SBI Photo Resize Guide 2026",
        description: "Exact dimensions, file sizes, thumb impression tips, and step-by-step resizing for banking exams.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the exact photo dimensions for IBPS 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IBPS requires photographs of exactly 200 pixels (Width) x 230 pixels (Height) in JPG/JPEG format with a file size between 20 KB and 50 KB. The background must be plain white or light-coloured, with your face covering 50-75% of the frame."
            }
        },
        {
            "@type": "Question",
            "name": "Are IBPS and SBI photo requirements the same?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, SBI follows the same photo and signature specifications as IBPS for PO, Clerk, and SO exams. Both use the same upload portal technology and validation rules. The dimensions (200x230px for photo, 140x60px for signature) and file sizes are identical."
            }
        },
        {
            "@type": "Question",
            "name": "How do I prepare a left thumb impression for IBPS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Press your left thumb firmly on a blue or black stamp pad, then press it clearly on a white A4 sheet. Ensure the impression shows clear ridge patterns. Scan at 300 DPI, crop to a square, and resize to 240x240 pixels at 20-50 KB in JPG format."
            }
        },
        {
            "@type": "Question",
            "name": "Why does the IBPS portal reject my photo even though it looks correct?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IBPS validates both pixel dimensions AND file size strictly. Common hidden issues include: the image being 201x230 instead of 200x230, the file being 51 KB, or the image being in PNG format disguised with a .jpg extension. Use ExamResizer to ensure exact specifications."
            }
        },
        {
            "@type": "Question",
            "name": "Can I scan my signature with a phone for IBPS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can scan your signature using a phone camera. Place the signed white paper on a flat surface with even lighting (near a window works best). Hold the phone directly above, not at an angle. Take the photo, then crop tightly around the signature and use ExamResizer to resize to 140x60 pixels at 10-20 KB."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IBPS & SBI Photo Resize Guide 2026 — Exact Dimensions & Size Limits",
    "description": "Complete guide to formatting photo, signature, and left thumb impression for IBPS PO, IBPS Clerk, IBPS SO, and SBI banking exams.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-01-25",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/ibps-photo-resize" }
};

export default function IbpsGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="ibps-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="ibps-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Resize Photo &amp; Signature for IBPS &amp; SBI Exams 2026</h1>
                <p className="lead">
                    A complete, expert guide to formatting your photo, signature, and left thumb impression for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, and SBI Clerk exams. Updated with the latest 2026 notification requirements.
                </p>

                <h2>Which Banking Exams Does This Cover?</h2>
                <p>
                    The Institute of Banking Personnel Selection (IBPS) and State Bank of India (SBI) share identical photo and document upload specifications. This guide applies to:
                </p>
                <ul>
                    <li><strong>IBPS PO (Probationary Officer)</strong> — Prelims + Mains registration</li>
                    <li><strong>IBPS Clerk</strong> — All phases</li>
                    <li><strong>IBPS SO (Specialist Officer)</strong> — IT, Law, Marketing, HR, Agriculture</li>
                    <li><strong>IBPS RRB (Regional Rural Banks)</strong> — Officer Scale I, II, III and Office Assistant</li>
                    <li><strong>SBI PO</strong> — Prelims + Mains</li>
                    <li><strong>SBI Clerk (Junior Associate)</strong></li>
                    <li><strong>SBI SO (Specialist Cadre Officer)</strong></li>
                </ul>
                <p>
                    All these exams use similar online registration portals with the same strict upload validation. If your documents work for one banking exam, they will work for all the others listed above.
                </p>

                <h2>Why IBPS Rejections Are So Common</h2>
                <p>
                    IBPS and SBI have one of the strictest upload validation systems among all Indian government exams. Unlike some portals that allow a margin of error, the IBPS form portal checks <strong>both pixel dimensions and file size in real-time</strong> before allowing the upload.
                </p>
                <p>
                    If your image doesn&apos;t match exactly — even by 1 pixel or 1 KB — the upload button simply will not work. There is no error message in some cases; the button just stays greyed out. This leads to candidates spending hours trying different images, often making things worse with each attempt.
                </p>
                <p>
                    The three documents you must upload are: a <strong>photograph</strong>, a <strong>signature</strong>, and a <strong>left thumb impression</strong>. Each has its own specific dimensions and size limits.
                </p>

                <h2>Official IBPS Photo Specifications</h2>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <h3 className="text-lg font-bold mb-2">Photograph Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> Exactly 200 pixels (Width) × 230 pixels (Height).</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only — PNG files are silently rejected.</li>
                        <li><strong>Background:</strong> Plain White or Light-Coloured Background.</li>
                        <li><strong>Face Coverage:</strong> Your face should cover approximately 50–75% of the photo area.</li>
                        <li><strong>Recency:</strong> Photo should be taken within the last 6 months.</li>
                        <li><strong>Note:</strong> Date on Photo (DOP) is NOT required for IBPS/SBI exams.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2">Signature Requirements</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> Exactly 140 pixels (Width) × 60 pixels (Height).</li>
                        <li><strong>File Size:</strong> 10 KB to 20 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Black ink on white paper (scanned).</li>
                        <li><strong>Style:</strong> Running hand (cursive) — block letters are not accepted.</li>
                        <li><strong>Note:</strong> The signature must match what you sign on the exam answer sheet.</li>
                    </ul>
                </div>

                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-amber-600">
                    <h3 className="text-lg font-bold mb-2">Left Thumb Impression</h3>
                    <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> Exactly 240 pixels (Width) × 240 pixels (Height) — square format.</li>
                        <li><strong>File Size:</strong> 20 KB to 50 KB.</li>
                        <li><strong>Format:</strong> JPG / JPEG only.</li>
                        <li><strong>Ink:</strong> Blue or black stamp pad ink on clean white paper.</li>
                        <li><strong>Note:</strong> Ridge patterns must be clearly visible — smudged impressions are rejected during document verification.</li>
                    </ul>
                </div>

                <h2>Complete Left Thumb Impression Guide</h2>
                <p>
                    The thumb impression is unique to IBPS/SBI among major government exams. Most candidates have never done this before, so here&apos;s a step-by-step method:
                </p>
                <ol>
                    <li><strong>Get a stamp pad:</strong> Purchase a blue or black stamp pad from any stationery shop. Avoid red ink — it produces poor contrast when scanned.</li>
                    <li><strong>Clean your thumb:</strong> Wash your left hand and dry it completely. Moisture or dirt on your thumb will produce a smudged impression.</li>
                    <li><strong>Press firmly on the pad:</strong> Press your left thumb firmly on the stamp pad, ensuring the entire pad surface contacts your thumb from tip to first joint.</li>
                    <li><strong>Press on white paper:</strong> Immediately press your inked thumb firmly onto a clean white A4 sheet. Do not rock or roll your thumb — press straight down and lift straight up.</li>
                    <li><strong>Check clarity:</strong> The impression should show clear ridge patterns (fingerprint lines). If it looks like a solid blob of ink, you used too much ink. Clean your thumb and try again with a lighter touch.</li>
                    <li><strong>Take multiple impressions:</strong> Make 3–4 impressions on the same sheet and pick the clearest one.</li>
                    <li><strong>Scan and crop:</strong> Scan at 300 DPI or photograph with your phone in good lighting. Crop to a square around the impression.</li>
                    <li><strong>Resize:</strong> Use our tool to resize to 240×240 pixels and compress to 20–50 KB.</li>
                </ol>

                <h2>How to Scan Documents at Home Without a Scanner</h2>
                <p>
                    Not everyone has access to a flatbed scanner. Here&apos;s how to get scanner-quality results using just your smartphone:
                </p>
                <ol>
                    <li><strong>Find natural light:</strong> Place your document near a window. Natural daylight provides the most even illumination. Avoid direct sunlight which creates harsh shadows.</li>
                    <li><strong>Use a flat surface:</strong> Place the white paper on a table or flat surface. Do not hold it in your hand — this introduces curves and wrinkles.</li>
                    <li><strong>Position your phone:</strong> Hold your phone directly above the document, parallel to the surface. Use both hands for stability. Most phones now have a &quot;document mode&quot; or &quot;scan mode&quot; in the camera app — use it if available.</li>
                    <li><strong>Avoid shadows:</strong> Make sure your hand or body does not cast a shadow on the document. Stand slightly to the side if needed.</li>
                    <li><strong>Use high resolution:</strong> Set your camera to the maximum resolution. You can always compress later, but you cannot recover lost detail.</li>
                    <li><strong>Crop precisely:</strong> Crop the photo to show only the document content — remove all background elements (table, floor, other papers).</li>
                </ol>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                    <li><strong>Wrong aspect ratio:</strong> IBPS requires a specific 200×230 ratio (approximately 20:23), not a standard passport size or square. Using the wrong aspect ratio is the #1 rejection reason.</li>
                    <li><strong>Signature too large:</strong> The 10–20 KB limit is very tight. Using a phone camera photo of your signature (typically 2–5 MB) without proper compression will always exceed this limit.</li>
                    <li><strong>Thumb impression clarity:</strong> A smudged or too-dark impression will pass the automated upload check but will be rejected during physical document verification at the exam centre.</li>
                    <li><strong>Using PNG format:</strong> IBPS only accepts JPG/JPEG. PNG files are silently rejected — the portal does not even show an error message.</li>
                    <li><strong>Renaming file extension:</strong> Simply renaming &quot;photo.png&quot; to &quot;photo.jpg&quot; does NOT actually convert the file format. The portal checks the actual file header, not just the name.</li>
                    <li><strong>Using online converters:</strong> Many free online converters upload your photo to their servers, posing a privacy risk with sensitive identity documents. Use a tool that processes locally.</li>
                </ul>

                <h2>IBPS vs SBI — Are Requirements Identical?</h2>
                <p>
                    Yes, for practical purposes, IBPS and SBI photo/signature/thumb requirements are identical. SBI was previously an IBPS-participating bank and adopted the same digital standards. The upload portals are built on similar technology and enforce the same validation rules.
                </p>
                <p>
                    The only minor difference may be in specific exam notifications — always check the &quot;Important Instructions&quot; section of the official notification PDF for your specific exam. But in our experience tracking these specifications since 2023, the image requirements have remained consistent across all IBPS and SBI exams.
                </p>

                <h2>Portal Upload Troubleshooting</h2>
                <ul>
                    <li><strong>Upload button greyed out:</strong> This means your image doesn&apos;t meet specifications. Check dimensions (200×230px) and file size (20–50 KB). Use our IBPS tool for guaranteed compliance.</li>
                    <li><strong>&quot;Invalid file type&quot; error:</strong> You uploaded a non-JPEG file. Even a .jpg file can internally be a PNG or BMP. Re-save as actual JPEG.</li>
                    <li><strong>Image appears stretched:</strong> Your original image had a different aspect ratio and was force-fitted. Always crop to 200×230 ratio before uploading.</li>
                    <li><strong>Photo too dark after upload:</strong> The portal applies additional compression when storing your image. Start with a bright, well-lit photo so it remains clear after portal processing.</li>
                </ul>

                <h2>How to Resize Using ExamResizer</h2>
                <ol>
                    <li>Go to the <Link href="/resize/ibps">IBPS Resizer Tool</Link>.</li>
                    <li>Select the document type: Photo, Signature, or Thumb Impression.</li>
                    <li>Upload your raw image — we accept any format and any size.</li>
                    <li>Use the interactive crop guide to frame your face, signature, or thumb precisely.</li>
                    <li>Our smart compression ensures the file stays within the exact KB range required.</li>
                    <li>Click <strong>Download</strong> and upload directly to the IBPS/SBI portal.</li>
                </ol>
                <p>
                    All processing happens locally in your browser — <strong>your images never leave your device</strong>.
                </p>

                <h2>Official Sources &amp; References</h2>
                <ul>
                    <li><strong>IBPS Official Website:</strong> <a href="https://ibps.in" target="_blank" rel="noopener noreferrer">ibps.in</a></li>
                    <li><strong>SBI Recruitment:</strong> <a href="https://sbi.co.in/web/careers" target="_blank" rel="noopener noreferrer">sbi.co.in/web/careers</a></li>
                    <li><strong>Photo Guidelines:</strong> Available in the &quot;Important Instructions to Applicants&quot; section of each exam notification.</li>
                </ul>
                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with IBPS, SBI, or any government organization. This guide is based on publicly available official notifications and is for informational purposes only.</em>
                </p>

                <div className="mt-12 text-center not-prose">
                    <Button asChild size="lg">
                        <Link href="/resize/ibps">Resize for IBPS / SBI Now</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
