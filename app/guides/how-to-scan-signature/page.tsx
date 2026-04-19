import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "How to Scan Your Signature for Government Exams Without a Scanner | ExamResizer",
    description: "Step-by-step guide to scanning your signature using a smartphone for UPSC, SSC, IBPS, and RRB exams. Phone scanning techniques, lighting tips, ink recommendations, and compression best practices.",
    alternates: {
        canonical: '/guides/how-to-scan-signature',
    },
    openGraph: {
        title: "How to Scan Your Signature for Government Exams (Without a Scanner)",
        description: "Professional quality signature scanning using just your smartphone. Works for UPSC, SSC, IBPS, and RRB.",
        url: '/guides/how-to-scan-signature',
        type: 'article',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can I scan my signature with a phone camera?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a smartphone camera can produce excellent signature scans if done correctly. Use natural daylight, hold the phone directly above the signature (not at an angle), and use your phone's document/scan mode if available. The resulting image should be clear and high-contrast."
            }
        },
        {
            "@type": "Question",
            "name": "What type of pen should I use for scanning signatures?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use a black gel pen or ballpoint pen for the best scanning results. Black ink provides maximum contrast against white paper, which is critical when compressing to small file sizes (10-20 KB for SSC/IBPS). Avoid blue ink, felt-tip markers, and pencils."
            }
        },
        {
            "@type": "Question",
            "name": "How do I remove shadows from my signature scan?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Position the paper near a window for diffused natural light. Place the paper flat on a table, not in your hand. Hold the phone directly above, and make sure your body or hand isn't casting a shadow. Taking the photo slightly to the side while keeping the phone parallel can help."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Scan Your Signature for Government Exams Without a Scanner",
    "description": "Complete guide to scanning signatures using a smartphone for Indian government exam applications.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-03-10",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/how-to-scan-signature" }
};

export default function ScanSignatureGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="scan-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="scan-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>How to Scan Your Signature for Government Exams (Without a Scanner)</h1>
                <p className="lead">
                    You don&apos;t need an expensive flatbed scanner to create a perfect signature image for your UPSC, SSC, IBPS, or RRB application. This guide teaches you how to get professional-quality results using just your smartphone — the same phone you&apos;ll use to upload the application.
                </p>

                <h2>Why Signature Quality Matters More Than You Think</h2>
                <p>
                    Your uploaded signature serves two critical purposes in the exam process:
                </p>
                <ol>
                    <li><strong>Form acceptance:</strong> The signature image must meet strict technical specifications (file size, dimensions, format) to pass the portal&apos;s automated validation.</li>
                    <li><strong>Identity verification:</strong> During physical document verification and at the exam centre, invigilators compare your uploaded signature against the one you write on the answer sheet and attendance register. If they don&apos;t match — or if the uploaded signature is too blurry to compare — you could face disqualification.</li>
                </ol>
                <p>
                    The challenge is that most exam portals require signatures at extremely small file sizes (10–20 KB for SSC and IBPS), which means the source image must be as clean and high-contrast as possible. A poor scan produces a poor signature even after the best compression.
                </p>

                <h2>Step 1: Choose the Right Pen and Paper</h2>
                <p>
                    The pen and paper you choose have a direct impact on the quality of your scanned signature. Here are specific recommendations:
                </p>
                <ul>
                    <li><strong>Paper:</strong> Use a clean, unlined white A4 sheet. Do not use notebook paper with blue lines, graph paper, or coloured paper. The lines and grid marks will appear in the scan and may trigger rejection.</li>
                    <li><strong>Pen (Best):</strong> A <strong>black gel pen</strong> (0.5mm or 0.7mm tip) provides the best contrast and smooth flow. Brands like Pilot G2, Cello Geltech, or Uni-ball Signo work well.</li>
                    <li><strong>Pen (Good):</strong> A <strong>black ballpoint pen</strong> is also acceptable. Ensure it flows smoothly — a pen that skips or requires pressure produces inconsistent ink density.</li>
                    <li><strong>Pen (Avoid):</strong> Avoid blue ink (lower contrast when compressed), felt-tip markers (too thick, bleeds on paper), and pencils (too faint to scan clearly).</li>
                </ul>

                <h2>Step 2: Sign Correctly</h2>
                <ul>
                    <li><strong>Sign in the centre of the page:</strong> Leave at least 3–4 cm of white space around your signature on all sides. This makes cropping easier.</li>
                    <li><strong>Sign naturally:</strong> Use your normal signature — the one you sign on your Aadhaar card, bank documents, etc. Do not try to make it fancier or simpler for the exam.</li>
                    <li><strong>Consistency is key:</strong> Practice 3–4 signatures on the same sheet and pick the best one. Your uploaded signature must match what you sign on exam day.</li>
                    <li><strong>Block letters are not valid:</strong> Writing your name in CAPITAL LETTERS is not considered a legal signature. All government exams require cursive/running hand signatures.</li>
                </ul>

                <h2>Step 3: Set Up Your Phone for Scanning</h2>
                <p>
                    The quality of your phone scan depends almost entirely on lighting and positioning. Here&apos;s the exact setup:
                </p>
                <ol>
                    <li><strong>Find natural light:</strong> Place the paper on a flat surface (table or desk) near a window. Natural daylight provides the most even, shadow-free illumination. The best time is late morning or early afternoon when sunlight is diffused.</li>
                    <li><strong>No direct sunlight:</strong> Avoid direct sunbeams hitting the paper — they create harsh white spots and deep shadows. If the sun is directly shining on the paper, use a thin white curtain or sheet to diffuse it.</li>
                    <li><strong>Turn off overhead lights:</strong> Ceiling lights and tube lights create uneven shadows and may cause a yellowish tint on the white paper.</li>
                    <li><strong>Use a flat surface:</strong> The paper must lie completely flat. If it curls, tape the corners down to the table. Any curve in the paper causes uneven lighting and focus issues.</li>
                </ol>

                <h2>Step 4: Capture the Image</h2>
                <ol>
                    <li><strong>Enable document mode:</strong> Most popular phone brands (Samsung, Xiaomi, Realme, Oppo, Vivo, OnePlus, iPhone) have a &quot;Document&quot; or &quot;Scan&quot; mode in the camera app. This mode automatically corrects perspective, enhances contrast, and converts the background to pure white.</li>
                    <li><strong>Hold directly above:</strong> Position your phone directly above the signature, parallel to the paper. Do not tilt the phone — this causes perspective distortion (trapezoidal shape).</li>
                    <li><strong>Distance:</strong> Hold the phone about 15–20 cm above the signature. Too close and the focus may blur; too far and you lose detail.</li>
                    <li><strong>Stabilize:</strong> Rest your elbows on the table to minimize camera shake. Hold your breath for the moment of capture if your phone doesn&apos;t have OIS (Optical Image Stabilization).</li>
                    <li><strong>Check for shadows:</strong> Before tapping the capture button, check the preview. Your hand, phone, or body should not cast any shadow on the paper.</li>
                    <li><strong>Tap to focus:</strong> Tap on the signature in the camera preview to ensure the camera focuses precisely on the ink, not the paper edge or background.</li>
                </ol>

                <h2>Step 5: Edit and Crop</h2>
                <p>
                    After capturing, you need to prepare the image before uploading to ExamResizer or the exam portal:
                </p>
                <ol>
                    <li><strong>Crop tightly:</strong> Using your phone&apos;s photo editor, crop the image to show only the signature with a thin white margin (about 3–5mm on each side). Remove all extra white space, table edges, and background elements.</li>
                    <li><strong>Check orientation:</strong> Ensure the signature is perfectly horizontal. If it&apos;s slightly tilted, use the rotation/straighten tool to correct it.</li>
                    <li><strong>Brightness/Contrast:</strong> If the white paper appears grayish, increase brightness slightly. If the ink looks faint, increase contrast. Do not overdo it — the signature should look natural.</li>
                </ol>

                <h2>Step 6: Resize and Compress</h2>
                <p>
                    Now use ExamResizer to convert your cropped signature to the exact specifications:
                </p>
                <ul>
                    <li><strong>SSC:</strong> 4.0cm × 2.0cm, 10–20 KB → <Link href="/resize/ssc">SSC Tool</Link></li>
                    <li><strong>IBPS/SBI:</strong> 140×60 pixels, 10–20 KB → <Link href="/resize/ibps">IBPS Tool</Link></li>
                    <li><strong>UPSC:</strong> 350×350 pixels, 20–300 KB → <Link href="/resize/upsc">UPSC Tool</Link></li>
                    <li><strong>RRB:</strong> Variable, 10–40 KB → <Link href="/resize/rrb">RRB Tool</Link></li>
                </ul>
                <p>
                    Our tools use smart compression algorithms specifically designed for signatures — they preserve edge sharpness (the actual ink strokes) while aggressively compressing the white background areas.
                </p>

                <h2>Using a Flatbed Scanner (If Available)</h2>
                <p>
                    If you do have access to a flatbed scanner (at home, office, or a printshop), here are the optimal settings:
                </p>
                <ul>
                    <li><strong>Resolution:</strong> 300 DPI (sufficient for all exam requirements; higher DPI increases file size without visible benefit after resizing)</li>
                    <li><strong>Colour mode:</strong> Greyscale or Colour (not Black &amp; White, which can make thin strokes disappear)</li>
                    <li><strong>Format:</strong> Save as JPEG at 90% quality</li>
                    <li><strong>Clean the glass:</strong> Wipe the scanner glass before placing your paper. Dust and fingerprints show up clearly in the scan.</li>
                </ul>

                <h2>Troubleshooting Common Issues</h2>
                <ul>
                    <li><strong>Shadow on one side:</strong> Reposition the paper relative to the light source. The light should come from the side opposite to where you&apos;re standing.</li>
                    <li><strong>Yellowish tint:</strong> The paper appears yellow-white instead of pure white. This is caused by warm artificial lighting. Switch to natural daylight or use your camera&apos;s &quot;document mode&quot; which auto-corrects white balance.</li>
                    <li><strong>Blurry signature:</strong> Camera shook during capture. Stabilize your hand better, or use a 2-second timer so you can hold steady.</li>
                    <li><strong>Lines visible from paper:</strong> You used ruled or grid paper. Sign again on plain white A4 paper.</li>
                    <li><strong>Ink appears faded:</strong> Your gel pen was running low. Use a fresh pen with full ink flow.</li>
                    <li><strong>Signature too small after zoom:</strong> You photographed from too far away. Move closer (15–20cm above the signature) and try again.</li>
                </ul>

                <h2>Pro Tips from Experienced Candidates</h2>
                <ul>
                    <li>Keep a &quot;master signature sheet&quot; — a single A4 page with 5–6 of your best signatures. Scan the entire sheet once, then crop individual signatures as needed for different exams.</li>
                    <li>Save the original high-resolution scan in cloud storage (Google Drive, OneDrive). You may need it months later for correction windows.</li>
                    <li>If applying for multiple exams (UPSC + SSC + IBPS), resize from the same source image to ensure consistency across all applications.</li>
                    <li>Practice your signature before the exam day so you can reproduce it naturally under pressure.</li>
                </ul>

                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with any government organization. This guide is for informational purposes only.</em>
                </p>

                <div className="mt-12 text-center not-prose flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/tools">Resize Your Signature Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/guides/passport-vs-exam-photo">Photo Size Comparison →</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
