import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Heart, Users, CheckCircle2, Clock, BookOpen, Globe } from "lucide-react";
import { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations/fade-in";

export const metadata: Metadata = {
    title: "About Us | ExamResizer.in — Free Photo Resizer for Government Exams",
    description: "Learn about ExamResizer.in — the free, privacy-first photo resizer built by developers who faced the same exam application struggles. Our mission, team, and commitment to helping Indian students.",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "About ExamResizer.in — Our Mission & Team",
        description: "The free, privacy-first photo resizer built by developers who faced the same exam application struggles.",
        url: '/about',
        type: 'website',
    },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <FadeInStagger initialDelay={0.1}>
                        <FadeInStaggerItem direction="up" className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm mb-6">
                            Our Mission
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up">
                            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white max-w-4xl mx-auto mb-6 leading-tight">
                                Simplifying Exam Applications for <span className="text-primary">Every Indian Student</span>
                            </h1>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up">
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 px-2">
                                ExamResizer.in is a free, privacy-first tool designed to ensure your government exam applications are never rejected due to incorrect photo formatting. Built by developers who faced the same frustrations and decided to solve the problem once and for all.
                            </p>
                        </FadeInStaggerItem>
                    </FadeInStagger>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeInStagger className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeInStaggerItem direction="left" className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Our Story: Why We Built This</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                It started with a frustrating experience. In 2024, one of our team members spent 3 hours trying to resize a photo for an IBPS PO application. The portal kept rejecting the photo with no clear error message — just a greyed-out upload button.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                After researching online, trying 5 different free tools (all of which uploaded photos to unknown servers), and finally getting it right, we realized that <strong>millions of Indian students face this exact problem</strong> every year across dozens of government exams.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The existing solutions were either paid, required server uploads (a privacy nightmare with identity documents), or simply didn&apos;t have the exact specifications for Indian government exams pre-configured. We built ExamResizer to fix all three problems.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-100 flex items-center justify-center text-xs font-bold shadow-sm hover:translate-y-[-2px] transition-transform">UPSC</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center text-xs font-bold shadow-sm hover:translate-y-[-2px] transition-transform">SSC</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-background bg-slate-300 flex items-center justify-center text-xs font-bold shadow-sm hover:translate-y-[-2px] transition-transform">IBPS</div>
                                </div>
                                <span className="text-sm font-medium text-muted-foreground">Trusted by thousands of aspirants</span>
                            </div>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="right" className="bg-slate-100 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative mt-8 md:mt-0 hover:shadow-lg transition-shadow">
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
                                        <p className="text-muted-foreground">WebAssembly-powered processing means your photos are resized in milliseconds, not minutes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">100% Privacy</h3>
                                        <p className="text-muted-foreground">No servers. No uploads. No databases. Your personal identity documents stay exclusively on your device.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Always Updated</h3>
                                        <p className="text-muted-foreground">We monitor official notifications from UPSC, SSC, IBPS, RRB, and NTA to keep specifications current.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInStaggerItem>
                    </FadeInStagger>
                </div>
            </section>

            {/* How We Stay Updated */}
            <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeIn direction="up" className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">How We Keep Specifications Accurate</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Accuracy is non-negotiable when it comes to exam applications. Here&apos;s our process for ensuring every preset is correct.
                        </p>
                    </FadeIn>
                    <FadeInStagger className="grid md:grid-cols-4 gap-8">
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-4 mx-auto">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold mb-2">Monitor</h3>
                            <p className="text-sm text-muted-foreground">We track official websites and notification PDFs from all major exam bodies daily.</p>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold mb-2">Verify</h3>
                            <p className="text-sm text-muted-foreground">Every specification is cross-referenced against at least 2 official sources before updating.</p>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center mb-4 mx-auto">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold mb-2">Update</h3>
                            <p className="text-sm text-muted-foreground">When a new notification drops, we update our presets within 24 hours.</p>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mb-4 mx-auto">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold mb-2">Test</h3>
                            <p className="text-sm text-muted-foreground">We test every resize output against the actual exam portal to confirm uploads succeed.</p>
                        </FadeInStaggerItem>
                    </FadeInStagger>
                </div>
            </section>

            {/* By the Numbers */}
            <section className="py-16 md:py-20">
                <FadeIn className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">ExamResizer by the Numbers</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        <div>
                            <div className="text-4xl font-extrabold text-primary mb-2">10+</div>
                            <p className="text-sm text-muted-foreground font-medium">Exams Supported</p>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
                            <p className="text-sm text-muted-foreground font-medium">Preset Configurations</p>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary mb-2">0</div>
                            <p className="text-sm text-muted-foreground font-medium">Server Uploads</p>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
                            <p className="text-sm text-muted-foreground font-medium">Free to Use</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Core Values */}
            <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="container mx-auto px-4 md:px-6">
                    <FadeIn direction="up" className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every decision we make is guided by these principles.
                        </p>
                    </FadeIn>
                    <FadeInStagger className="grid md:grid-cols-3 gap-8">
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-600 flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Free Forever</h3>
                            <p className="text-muted-foreground">
                                Education resources should be accessible to everyone, regardless of their financial situation. We promise to keep all core photo resizing features completely free for students forever. We sustain the project through non-intrusive advertising — never through paywalls.
                            </p>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community First</h3>
                            <p className="text-muted-foreground">
                                We listen to feedback from our users — students preparing for some of the most competitive exams in the world. When a new exam notification changes requirements, when a user reports a bug, or when someone suggests a new feature, we act quickly. Our goal is to be the tool that Indian exam aspirants recommend to each other.
                            </p>
                        </FadeInStaggerItem>
                        <FadeInStaggerItem direction="up" className="bg-white dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparency &amp; Privacy</h3>
                            <p className="text-muted-foreground">
                                We made a deliberate architectural decision: <strong>zero server-side processing</strong>. Your photos never leave your device — period. This isn&apos;t just a marketing claim; it&apos;s how the software is built. We have no server database, no image storage, and no way to access your files even if we wanted to. We believe this is the only ethical approach when handling sensitive identity documents.
                            </p>
                        </FadeInStaggerItem>
                    </FadeInStagger>
                </div>
            </section>

            {/* What We Cover */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Exams We Support</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We support photo resizing for all major Indian government and entrance examinations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            "UPSC (IAS/IPS/NDA)",
                            "SSC (CGL/CHSL/MTS)",
                            "IBPS (PO/Clerk/SO)",
                            "SBI (PO/Clerk)",
                            "RRB (NTPC/Group D)",
                            "NEET UG",
                            "JEE Main",
                            "CUET UG/PG",
                        ].map((exam) => (
                            <div key={exam} className="bg-slate-50 dark:bg-slate-900/50 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium text-center">
                                {exam}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Don&apos;t see your exam? <Link href="/contact" className="text-primary hover:underline">Let us know</Link> and we&apos;ll add it within 48 hours.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <FadeIn direction="up" className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/10">
                        <h2 className="text-3xl font-bold mb-6">Ready to resize your photo?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                            Join thousands of students who cleared their application process smoothly with perfectly formatted photos and signatures.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="rounded-full px-8 h-12 text-base hover:scale-105 transition-transform">
                                <Link href="/tools">
                                    Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base hover:scale-[1.02] transition-transform">
                                <Link href="/contact">
                                    Contact Support
                                </Link>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
