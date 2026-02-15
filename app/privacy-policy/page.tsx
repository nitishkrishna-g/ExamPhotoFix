import { Shield, Lock, ServerOff, Eye, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="container mx-auto px-6 md:px-6 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200/50 backdrop-blur-sm mb-6">
                        Legal & Security
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-green-800 to-slate-900 dark:from-white dark:via-green-200 dark:to-white max-w-4xl mx-auto mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
                        Your privacy is our #1 priority. We built SarkariPhoto.in with a <span className="text-foreground font-semibold">"No Uploads"</span> architecture to guarantee your security.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Last Updated: February 2026
                    </p>
                </div>
            </section>

            <div className="container px-6 md:px-6 py-20 max-w-6xl mx-auto">
                {/* The Guarantee Card */}
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-50"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">No Server Uploads</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Unlike most online tools, <strong>SarkariPhoto.in operates entirely in your browser</strong>. When you select a photo, it is processed locally on your device using WebAssembly & Canvas API.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Your files never leave your computer or phone. Even if you disconnect from the internet after loading the page, the tool will still work.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <ServerOff className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-xl">Technical Guarantee</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                We do not have a server database to store your images. It's technically impossible for us to leak your photos.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/50">
                                <Shield className="w-4 h-4" /> Verified by Design
                            </div>
                        </div>
                    </div>
                </div>

                {/* Policy Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Data Collection */}
                    <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            We collect minimal, anonymous data to improve the site:
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                <div><strong>Analytics:</strong> Anonymous usage stats via Google Analytics.</div>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                <div><strong>Local Storage:</strong> We save your preferences (like Dark Mode) locally.</div>
                            </li>
                        </ul>
                    </div>

                    {/* Advertising */}
                    <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-800 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Advertising</h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            To keep this tool free, we display ads via Google AdSense.
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                                <div>Google may use cookies to serve ads based on prior visits.</div>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                                <div>You can opt out via Google's Ad Settings.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact & Changes */}
                <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-6">
                        <Mail className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        We believe in full transparency. If you have any questions about this policy or our practices, please reach out.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="rounded-full px-8">
                            <a href="mailto:privacy@sarkariphoto.in">Email Privacy Team</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-8 opacity-60">
                        Changes to Policy: We may update this policy occasionally. Continued use constitutes acceptance.
                    </p>
                </div>
            </div>
        </div>
    );
}
