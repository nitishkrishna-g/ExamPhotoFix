import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Passport Size Photo vs Exam Photo — Complete Comparison Guide 2026 | ExamResizer",
    description: "Detailed comparison between passport-size photos and government exam photos. Understand the differences in dimensions, file sizes, DPI, aspect ratios, and when to use which format for UPSC, SSC, IBPS, and RRB.",
    alternates: {
        canonical: '/guides/passport-vs-exam-photo',
    },
    openGraph: {
        title: "Passport Size Photo vs Exam Photo — Complete Comparison 2026",
        description: "Learn the critical differences between passport-size photos and government exam photos. Avoid rejections with the right format.",
        url: '/guides/passport-vs-exam-photo',
        type: 'article',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can I use a passport-size photo for government exams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not directly. A standard passport-size photo is 35mm x 45mm (rectangular, 7:9 ratio), while UPSC requires 350x350px (square, 1:1), IBPS requires 200x230px, and SSC requires 3.5cm x 4.5cm with DOP. You must crop and resize your passport photo to match the specific exam's digital requirements."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between DPI and pixel dimensions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "DPI (Dots Per Inch) determines print quality and is only relevant when printing. Pixel dimensions determine the actual image size on screen and for digital uploads. For government exam uploads, only pixel dimensions and file size (in KB) matter. DPI is irrelevant for the upload portal."
            }
        },
        {
            "@type": "Question",
            "name": "How do I convert physical dimensions (cm/mm) to pixels?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use this formula: Pixels = (Dimension in cm × DPI) ÷ 2.54. For example, 3.5 cm at 300 DPI = (3.5 × 300) ÷ 2.54 = 413 pixels. At 96 DPI (screen resolution), 3.5 cm = 132 pixels. The DPI you choose depends on whether the output is for print or screen."
            }
        }
    ]
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Passport Size Photo vs Exam Photo — Complete Comparison Guide 2026",
    "description": "Understanding the critical differences between passport photos and government exam photos.",
    "author": { "@type": "Organization", "name": "ExamResizer.in" },
    "publisher": { "@type": "Organization", "name": "ExamResizer.in", "url": "https://examresizer.vercel.app" },
    "datePublished": "2026-03-01",
    "dateModified": "2026-04-10",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://examresizer.vercel.app/guides/passport-vs-exam-photo" }
};

export default function PassportVsExamGuide() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <Script id="passport-faq-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(faqSchema)}
            </Script>
            <Script id="passport-article-schema" type="application/ld+json" strategy="beforeInteractive">
                {JSON.stringify(articleSchema)}
            </Script>

            <div className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            <article className="prose dark:prose-invert lg:prose-xl">
                <h1>Passport Size Photo vs Exam Photo: Complete Comparison Guide 2026</h1>
                <p className="lead">
                    One of the most common mistakes candidates make is assuming that a &quot;passport-size photo&quot; will work for all government exam applications. In reality, every exam has its own unique digital specifications. This guide explains the differences and helps you avoid costly rejections.
                </p>

                <h2>The Core Confusion: Physical vs Digital</h2>
                <p>
                    When a photo studio gives you a &quot;passport-size photo,&quot; they mean a physical print measuring <strong>35mm × 45mm</strong> (3.5cm × 4.5cm). This is a standard defined by the International Civil Aviation Organization (ICAO) and used globally for passports and visas.
                </p>
                <p>
                    However, when government exam portals ask for a photo, they specify <strong>digital dimensions</strong> — in pixels and kilobytes. A 35mm × 45mm physical photo can be any pixel dimension depending on how it was scanned. A 300 DPI scan would be 413×531 pixels, while a 72 DPI scan would be just 99×127 pixels.
                </p>
                <p>
                    The key insight is: <strong>physical dimensions and digital dimensions are not interchangeable</strong>. You must convert your physical photo to the exact pixel dimensions and file size required by each exam portal.
                </p>

                <h2>Complete Comparison Table</h2>
                <div className="not-prose overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 text-left border-b font-semibold">Specification</th>
                                <th className="p-3 text-left border-b font-semibold">Passport</th>
                                <th className="p-3 text-left border-b font-semibold">UPSC</th>
                                <th className="p-3 text-left border-b font-semibold">SSC</th>
                                <th className="p-3 text-left border-b font-semibold">IBPS</th>
                                <th className="p-3 text-left border-b font-semibold">RRB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">Physical Size</td>
                                <td className="p-3">35×45mm</td>
                                <td className="p-3">N/A (digital)</td>
                                <td className="p-3">3.5×4.5cm</td>
                                <td className="p-3">N/A (digital)</td>
                                <td className="p-3">35×45mm</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">Pixel Dimensions</td>
                                <td className="p-3">Varies</td>
                                <td className="p-3 font-bold">350×350px</td>
                                <td className="p-3">~413×531px</td>
                                <td className="p-3 font-bold">200×230px</td>
                                <td className="p-3">~413×531px</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">Aspect Ratio</td>
                                <td className="p-3">7:9</td>
                                <td className="p-3 font-bold text-blue-600">1:1 (Square)</td>
                                <td className="p-3">7:9</td>
                                <td className="p-3 font-bold text-blue-600">20:23</td>
                                <td className="p-3">7:9</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">File Size</td>
                                <td className="p-3">Any</td>
                                <td className="p-3">20–300 KB</td>
                                <td className="p-3">20–50 KB</td>
                                <td className="p-3">20–50 KB</td>
                                <td className="p-3">20–50 KB</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">Format</td>
                                <td className="p-3">Any</td>
                                <td className="p-3">JPEG only</td>
                                <td className="p-3">JPEG only</td>
                                <td className="p-3">JPEG only</td>
                                <td className="p-3">JPEG only</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="p-3 font-medium">Background</td>
                                <td className="p-3">White</td>
                                <td className="p-3">White</td>
                                <td className="p-3">White</td>
                                <td className="p-3">White/Light</td>
                                <td className="p-3">White/Light</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">Date on Photo</td>
                                <td className="p-3">No</td>
                                <td className="p-3">Optional</td>
                                <td className="p-3 font-bold text-orange-600">Mandatory</td>
                                <td className="p-3">No</td>
                                <td className="p-3">Recommended</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Understanding DPI — Why It Matters (and When It Doesn&apos;t)</h2>
                <p>
                    DPI stands for &quot;Dots Per Inch&quot; and measures print resolution — how many tiny dots of ink are packed into each inch when printing on paper. A higher DPI means sharper printing.
                </p>
                <p>
                    <strong>For government exam uploads, DPI is completely irrelevant.</strong> When you upload a photo to the UPSC or SSC portal, the system only checks:
                </p>
                <ol>
                    <li>Pixel dimensions (e.g., 350×350 pixels)</li>
                    <li>File size (e.g., 20–300 KB)</li>
                    <li>File format (JPEG)</li>
                </ol>
                <p>
                    The DPI metadata embedded in the file is ignored. A 350×350 pixel image at 72 DPI looks exactly the same on screen as a 350×350 pixel image at 300 DPI — the pixel count is identical.
                </p>
                <p>
                    <strong>However, DPI matters when scanning.</strong> If you scan your passport photo at 300 DPI, you get a source image of about 413×531 pixels — plenty of detail to crop and resize down. If you scan at 72 DPI, you get only ~99×127 pixels — far too small to work with. Always scan at 300 DPI or higher.
                </p>

                <h2>How to Convert Physical Dimensions to Pixels</h2>
                <p>
                    Use this simple formula:
                </p>
                <div className="not-prose bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6 border-l-4 border-blue-600">
                    <p className="font-mono text-center text-lg">
                        <strong>Pixels = (Dimension in cm × DPI) ÷ 2.54</strong>
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                        <p><strong>Example 1:</strong> 3.5 cm at 300 DPI = (3.5 × 300) ÷ 2.54 = <strong>413 pixels</strong></p>
                        <p><strong>Example 2:</strong> 4.5 cm at 300 DPI = (4.5 × 300) ÷ 2.54 = <strong>531 pixels</strong></p>
                        <p><strong>Example 3:</strong> 3.5 cm at 96 DPI (screen) = (3.5 × 96) ÷ 2.54 = <strong>132 pixels</strong></p>
                    </div>
                </div>

                <h2>Why You Cannot Use One Photo for All Exams</h2>
                <p>
                    The single biggest mistake candidates make is getting one set of passport photos from a studio and trying to use the same digital file for UPSC, SSC, IBPS, and RRB. Here&apos;s why this fails:
                </p>
                <ul>
                    <li><strong>UPSC requires a square crop</strong> (1:1 ratio) — your rectangular passport photo must have the sides cropped off, which means you lose parts of the image. If the original was tightly framed, you may cut off part of your chin or forehead.</li>
                    <li><strong>IBPS has a unique aspect ratio</strong> (200×230, roughly 20:23) — this is neither passport ratio (7:9) nor square (1:1). You need a specific crop.</li>
                    <li><strong>SSC requires Date on Photo</strong> — no other exam mandates this. Your passport photo won&apos;t have a date printed on it.</li>
                    <li><strong>File sizes differ greatly</strong> — UPSC allows up to 300 KB while SSC caps at 50 KB. The same file won&apos;t meet both requirements.</li>
                </ul>
                <p>
                    The solution: get one high-quality studio photo (in digital format at the highest resolution possible), and then use exam-specific tools like <Link href="/tools">our resizers</Link> to create correctly sized versions for each exam.
                </p>

                <h2>Best Practices: Getting the Right Source Photo</h2>
                <ol>
                    <li><strong>Ask for the digital file:</strong> When visiting a photo studio, ask for the original high-resolution digital file (at least 1000×1000 pixels), not just the prints. Studios typically charge ₹50–100 extra for this.</li>
                    <li><strong>White background:</strong> Specify a plain white background. This is universally required across all government exams.</li>
                    <li><strong>Leave space around your face:</strong> Ask the photographer to leave extra space above your head and below your chin. This gives you room to crop to different aspect ratios (square, 7:9, etc.).</li>
                    <li><strong>Get it on your phone:</strong> Ask the studio to share the digital file via WhatsApp or Bluetooth. This way you can resize and upload directly from your phone.</li>
                    <li><strong>Keep the original safe:</strong> Store the original high-resolution photo in a dedicated folder. You may need it for multiple exams across months.</li>
                </ol>

                <h2>Quick Reference: Which Exam Needs What</h2>
                <ul>
                    <li><strong>UPSC (IAS/IPS/NDA):</strong> Square crop, 350×350px, 20–300 KB → <Link href="/resize/upsc">Resize here</Link></li>
                    <li><strong>SSC (CGL/CHSL):</strong> Passport ratio + DOP, 20–50 KB → <Link href="/resize/ssc">Resize here</Link></li>
                    <li><strong>IBPS/SBI:</strong> 200×230px crop, 20–50 KB → <Link href="/resize/ibps">Resize here</Link></li>
                    <li><strong>RRB (NTPC/Group D):</strong> Passport ratio, 20–50 KB → <Link href="/resize/rrb">Resize here</Link></li>
                </ul>

                <p>
                    <em>Disclaimer: ExamResizer.in is not affiliated with any government organization. Specifications are based on publicly available official notifications. Always verify against the latest notification for your specific exam.</em>
                </p>

                <div className="mt-12 text-center not-prose flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/tools">Explore All Tools</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/guides/photo-rejection-reasons">Common Rejection Reasons →</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
