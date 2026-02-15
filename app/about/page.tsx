import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Heart, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm mb-6">
                        Our Mission
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white max-w-4xl mx-auto mb-6">
                        Simplifying Exam Applications for <span className="text-primary">Every Indian Student</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                        SarkariPhoto.in is a free, privacy-first tool designed to ensure your government exam applications are never rejected due to incorrect photo formatting.
                    </p>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-20">
                <div className="container mx-auto px-6 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Why We Built This?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every year, thousands of applications for exams like UPSC, SSC, and IBPS are rejected simply due to incorrect photo dimensions or file sizes.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Complex requirements (like 3.5cm x 4.5cm, 20-50KB, white background) can be a nightmare to manage with standard editing software. We wanted to fix that.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-100 flex items-center justify-center text-xs font-bold">UPSC</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center text-xs font-bold">SSC</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-300 flex items-center justify-center text-xs font-bold">IBPS</div>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">Trusted by thousands of aspirants</span>
                            </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative mt-8 md:mt-0">
                            <div className="md:absolute md:top-0 md:right-0 md:-mr-4 md:-mt-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 mb-6 md:mb-0 inline-block">
                                <span className="text-2xl font-bold text-green-600">0%</span> Rejections
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Zap className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Instant Formatting</h3>
                                        <p className="text-muted-foreground">WebAssembly power means your photos are resized in milliseconds.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">100% Privacy</h3>
                                        <p className="text-muted-foreground">No servers. No uploads. Your personal data stays on your device.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Always Updated</h3>
                                        <p className="text-muted-foreground">We track official notifications for 2026 guidelines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Built by developers who faced the same struggles.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Free Forever</h3>
                            <p className="text-muted-foreground">
                                Education resources should be accessible. We promise to keep core features free for students forever.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community First</h3>
                            <p className="text-muted-foreground">
                                We listen to feedback. If a new exam rule drops, we update our presets within 24 hours.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparency</h3>
                            <p className="text-muted-foreground">
                                We are open-source about our privacy practices. No hidden trackers, no data harvesting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-12 max-w-4xl mx-auto border border-primary/10">
                        <h2 className="text-3xl font-bold mb-6">Ready to resize your photo?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            Join thousands of students who cleared their application process smoothly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                                <Link href="/tools">
                                    Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                                <Link href="/contact">
                                    Contact Support
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
