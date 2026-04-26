import Link from "next/link";
import { Camera } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col items-center gap-8 text-center">

                {/* Brand */}
                <div className="flex flex-col items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-base hover:opacity-80 transition-opacity">
                        <Camera className="h-4 w-4 text-primary" />
                        <span>ExamResizer.in</span>
                    </Link>
                    <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                        Free, private photo & signature resizer for UPSC, SSC, IBPS, RRB and more. No uploads ever.
                    </p>
                </div>

                {/* Links — 4 columns, no wrapping */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 w-full max-w-5xl">

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/40 mb-1">Quick Links</p>
                        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Home</Link>
                        <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">All Tools</Link>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">About Us</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Contact</Link>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/40 mb-1">Guides</p>
                        <Link href="/guides/upsc-photo-resize" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">UPSC Photo Size</Link>
                        <Link href="/guides/ssc-signature-guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">SSC Signature Rules</Link>
                        <Link href="/guides/ibps-photo-resize" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">IBPS Photo Guide</Link>
                        <Link href="/guides/rrb-photo-resize" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">RRB Photo Guide</Link>
                        <Link href="/guides/neet-jee-photo-guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">NEET/JEE Guidelines</Link>
                        <Link href="/guides/passport-vs-exam-photo" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Passport vs Exam Photo</Link>
                        <Link href="/guides/how-to-scan-signature" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">How to Scan Signature</Link>
                        <Link href="/guides/photo-rejection-reasons" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Photo Rejection Reasons</Link>
                        <Link href="/guides/live-photo-capture-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Live Photo Capture Guide</Link>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/40 mb-1">Tools</p>
                        <Link href="/resize/upsc" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Resize for UPSC</Link>
                        <Link href="/resize/ssc" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Resize for SSC</Link>
                        <Link href="/resize/ibps" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Resize for IBPS</Link>
                        <Link href="/resize/rrb" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Resize for RRB</Link>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground/40 mb-1">Legal</p>
                        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">Terms of Service</Link>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t w-full pt-5 flex flex-col items-center gap-1">
                    <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ExamResizer.in. All rights reserved.</p>
                    <p className="text-xs text-muted-foreground">Not affiliated with UPSC, SSC, IBPS, RRB, NTA, or SBI.</p>
                </div>

            </div>
        </footer>
    );
}
