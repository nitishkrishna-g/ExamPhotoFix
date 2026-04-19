import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MessageSquare, HelpCircle, Mail } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations/fade-in";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | ExamResizer.in — Get Help With Photo Resizing",
    description: "Get in touch with the ExamResizer.in team. Ask questions about photo resizing for UPSC, SSC, IBPS, RRB, NEET, and JEE exams. We typically respond within 24 hours.",
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <FadeIn direction="up" className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have a question about resizing your photo for a government exam? Need help with a specific exam&apos;s specifications? We&apos;re here to help. Our team typically responds within 24 hours on working days.
                </p>
            </FadeIn>

            {/* Info Cards */}
            <FadeInStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <FadeInStaggerItem direction="up" className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours on working days (Monday–Saturday).</p>
                </FadeInStaggerItem>
                <FadeInStaggerItem direction="up" className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-4">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">What We Can Help With</h3>
                    <p className="text-sm text-muted-foreground">Photo specifications, tool usage issues, exam-specific queries, and feature requests.</p>
                </FadeInStaggerItem>
                <FadeInStaggerItem direction="up" className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 mb-4">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Direct Email</h3>
                    <p className="text-sm text-muted-foreground">
                        Prefer email? Write to us at <a href="mailto:support@examresizer.in" className="text-primary hover:underline font-medium">support@examresizer.in</a>
                    </p>
                </FadeInStaggerItem>
            </FadeInStagger>

            {/* Contact Form */}
            <FadeInStagger staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <FadeInStaggerItem direction="left" className="md:col-span-3">
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle>Send Us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="e.g., UPSC photo not uploading" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Describe your issue or question in detail. Include which exam and which document type (photo/signature) you need help with." rows={5} />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </FadeInStaggerItem>

                {/* Quick Help Sidebar */}
                <FadeInStaggerItem direction="right" className="md:col-span-2 space-y-6">
                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold">Before You Write</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Check if your question is already answered:
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/guides/photo-rejection-reasons" className="text-primary hover:underline">→ Why is my photo getting rejected?</Link>
                            </li>
                            <li>
                                <Link href="/guides/how-to-scan-signature" className="text-primary hover:underline">→ How to scan my signature properly?</Link>
                            </li>
                            <li>
                                <Link href="/guides/passport-vs-exam-photo" className="text-primary hover:underline">→ Passport photo vs exam photo differences</Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="text-primary hover:underline">→ Frequently Asked Questions</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold mb-3">Common Questions</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium mb-1">When will I get a response?</h4>
                                <p className="text-xs text-muted-foreground">We respond within 24 hours on working days. For urgent exam deadlines, mention the deadline in your subject line.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1">I need help urgently — my exam deadline is tomorrow!</h4>
                                <p className="text-xs text-muted-foreground">Try our <Link href="/tools" className="text-primary hover:underline">automated tools</Link> first — they handle 99% of cases instantly. If you&apos;re still stuck, email us with &quot;URGENT&quot; in the subject line.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1">Can you add support for a new exam?</h4>
                                <p className="text-xs text-muted-foreground">Yes! Send us the official notification PDF with the photo specifications, and we&apos;ll add it within 48 hours.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1">Is my data safe?</h4>
                                <p className="text-xs text-muted-foreground">Absolutely. All image processing happens in your browser. We never see, store, or transmit your photos. Read our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
                            </div>
                        </div>
                    </div>
                </FadeInStaggerItem>
            </FadeInStagger>
        </div>
    );
}
