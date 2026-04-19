import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center">
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center">
                        <Link href="/" className="font-bold text-lg flex items-center justify-center gap-2 mb-4">
                            <span>ExamResizer.in</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Free secure tool to resize photos and signatures for government exams like UPSC, SSC, IBPS, and RRB. No uploads, 100% privacy.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                            <li><Link href="/tools" className="hover:text-foreground">All Tools</Link></li>
                            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Guides</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/guides/upsc-photo-resize" className="hover:text-foreground">UPSC Photo Size</Link></li>
                            <li><Link href="/guides/ssc-signature-guidelines" className="hover:text-foreground">SSC Signature Rules</Link></li>
                            <li><Link href="/guides/ibps-photo-resize" className="hover:text-foreground">IBPS Photo Guide</Link></li>
                            <li><Link href="/guides/rrb-photo-resize" className="hover:text-foreground">RRB Photo Guide</Link></li>
                            <li><Link href="/guides/neet-jee-photo-guidelines" className="hover:text-foreground">NEET/JEE Guidelines</Link></li>
                            <li><Link href="/guides/passport-vs-exam-photo" className="hover:text-foreground">Passport vs Exam Photo</Link></li>
                            <li><Link href="/guides/how-to-scan-signature" className="hover:text-foreground">How to Scan Signature</Link></li>
                            <li><Link href="/guides/photo-rejection-reasons" className="hover:text-foreground">Photo Rejection Reasons</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                        </ul>

                        <h3 className="font-semibold mb-4 mt-6">Tools</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/resize/upsc" className="hover:text-foreground">Resize for UPSC</Link></li>
                            <li><Link href="/resize/ssc" className="hover:text-foreground">Resize for SSC</Link></li>
                            <li><Link href="/resize/ibps" className="hover:text-foreground">Resize for IBPS</Link></li>
                            <li><Link href="/resize/rrb" className="hover:text-foreground">Resize for RRB</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex justify-center items-center text-center">
                    <p className="text-xs text-muted-foreground">
                        © 2026 ExamResizer.in. All rights reserved. Not affiliated with any government organization (UPSC, SSC, IBPS, RRB, NTA, or SBI).
                    </p>
                </div>
            </div>
        </footer>
    );
}
