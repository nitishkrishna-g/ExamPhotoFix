import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="font-bold text-lg flex items-center gap-2 mb-4">
                            <span>SarkariPhoto.in</span>
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
                            <li><Link href="/resize/upsc" className="hover:text-foreground">Resize for UPSC</Link></li>
                            <li><Link href="/resize/ssc" className="hover:text-foreground">Resize for SSC</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-foreground">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-xs text-muted-foreground">
                        © 2026 SarkariPhoto.in. All rights reserved. Not affiliated with any government organization.
                    </p>
                </div>
            </div>
        </footer>
    );
}
