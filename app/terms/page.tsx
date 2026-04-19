import { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animations/fade-in";

export const metadata: Metadata = {
    title: "Terms of Service & Disclaimer | ExamResizer.in",
    description: "Terms of Service, Disclaimer, and legal information for ExamResizer.in — the free privacy-first photo resizer for government exams.",
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <main className="container mx-auto py-12 px-4 max-w-4xl">
            <FadeIn direction="up">
                <h1 className="text-3xl font-bold mb-2">Terms of Service &amp; Disclaimer</h1>
                <p className="text-sm text-muted-foreground mb-8">Last Updated: April 2026</p>
            </FadeIn>

            <FadeInStagger staggerDelay={0.05} className="prose dark:prose-invert max-w-none space-y-6">
                <FadeInStaggerItem direction="up">
                    <section className="bg-muted/30 p-6 rounded-xl border border-border">
                        <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">⚠️ Important Disclaimer</h2>
                        <p className="font-medium">
                            ExamResizer.in is an independent, free utility tool. We are <strong>NOT affiliated with, endorsed by, or associated with</strong> any government organization, including but not limited to UPSC (Union Public Service Commission), SSC (Staff Selection Commission), IBPS (Institute of Banking Personnel Selection), RRB (Railway Recruitment Boards), NTA (National Testing Agency), SBI (State Bank of India), or any other government body.
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            While we strive for accuracy in our specifications and guidelines, exam rules and requirements change frequently with each notification cycle. We are NOT responsible for any form rejections, loss of application fees, disqualification, loss of opportunity, or any other direct or indirect damages arising from the use of this tool or the information provided on this website. <strong>Always verify your final photo, signature, and other documents against the official notification published by the conducting body before uploading.</strong>
                        </p>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the ExamResizer.in website (hereinafter referred to as &quot;the Service,&quot; &quot;the Tool,&quot; or &quot;the Website&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must not access or use the Service.
                        </p>
                        <p>
                            These Terms apply to all visitors, users, and others who access or use the Service. Your continued use of the Website after any modifications to these Terms constitutes your acceptance of the revised Terms.
                        </p>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                        <p>
                            ExamResizer.in provides a free, browser-based tool for resizing, cropping, and compressing digital photographs and signatures to meet the specifications required by various Indian government examination portals. The Service includes:
                        </p>
                        <ul>
                            <li>Photo and signature resizing tools pre-configured for specific government exams (UPSC, SSC, IBPS, RRB, NEET, JEE, and others)</li>
                            <li>Image compression to meet specific file size requirements</li>
                            <li>Date and name overlay functionality for SSC exam photos</li>
                            <li>Informational guide articles about exam photo specifications</li>
                            <li>General educational content about government exam application processes</li>
                        </ul>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                        <p>
                            The Service is available to all individuals of any age. However, if you are under the age of 18, you should use this Service under the supervision and guidance of a parent or legal guardian. By using the Service, you represent that you have the legal capacity to enter into a binding agreement in your jurisdiction.
                        </p>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Privacy &amp; Data Processing</h2>
                        <p>
                            ExamResizer.in is fundamentally designed as a <strong>client-side (browser-based) tool</strong>. This means:
                        </p>
                        <ul>
                            <li><strong>No image uploads:</strong> Your photos, signatures, and other documents are processed entirely within your web browser using JavaScript, Canvas API, and WebAssembly technology. At no point are your images transmitted to, stored on, or accessible by our servers or any third-party servers.</li>
                            <li><strong>No image storage:</strong> We do not maintain any server-side database for storing user images. It is technically impossible for us to access, store, or leak your photos.</li>
                            <li><strong>Local storage:</strong> We may use your browser&apos;s local storage to save non-sensitive preferences (such as dark mode settings and last-used exam selection) for a better user experience. This data never leaves your device.</li>
                            <li><strong>Analytics:</strong> We use Google Analytics to collect anonymous, aggregated usage statistics (page views, device types, geographic regions) to improve the Service. This does not include any personal information or image data.</li>
                        </ul>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Permitted Use</h2>
                        <p>You agree to use the Service only for its intended purpose — resizing and formatting photos and signatures for legitimate examination applications. You agree NOT to:</p>
                        <ul>
                            <li>Use the Service for any illegal or unauthorized purpose</li>
                            <li>Attempt to reverse-engineer, decompile, or extract the source code of any proprietary algorithms</li>
                            <li>Use automated scripts, bots, or crawlers to access the Service in a manner that places unreasonable load on our infrastructure</li>
                            <li>Reproduce, redistribute, or commercially exploit the informational content (guides, articles, specifications) without attribution</li>
                            <li>Use the Service to process or manipulate images for fraudulent purposes, including but not limited to identity fraud, document forgery, or impersonation</li>
                        </ul>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Accuracy of Information</h2>
                        <p>
                            We make every reasonable effort to keep the photo specifications, exam guidelines, and informational content on this website accurate and up-to-date. Our team regularly monitors official notifications from UPSC, SSC, IBPS, RRB, NTA, and other examination bodies.
                        </p>
                        <p>
                            However, examination rules and specifications can change at any time without prior notice. <strong>We do not guarantee the accuracy, completeness, or timeliness of any information on this website.</strong> Always cross-reference specifications with the official notification or instructions published by the conducting body for your specific examination.
                        </p>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                        <p>
                            The Service, including its original content (text, graphics, logos, and code), features, and functionality, is owned by ExamResizer.in and is protected by applicable intellectual property laws. Our guides and articles are original works created by our editorial team.
                        </p>
                        <p>
                            The names of government organizations (UPSC, SSC, IBPS, RRB, NTA, SBI, etc.) and their logos are the property of their respective organizations. Their use on this website is solely for informational and identification purposes and does not imply any endorsement or affiliation.
                        </p>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Third-Party Services &amp; Advertising</h2>
                        <p>
                            To sustain the Service as a free tool, we display advertisements through Google AdSense. By using the Service, you acknowledge that:
                        </p>
                        <ul>
                            <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.</li>
                            <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your browsing history.</li>
                            <li>You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a>.</li>
                        </ul>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by applicable law, in no event shall ExamResizer.in, its owners, operators, employees, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation:
                        </p>
                        <ul>
                            <li>Loss of application fees due to rejected forms</li>
                            <li>Disqualification from examinations</li>
                            <li>Loss of data, profits, or business opportunities</li>
                            <li>Damages arising from the use or inability to use the Service</li>
                            <li>Damages arising from reliance on any information provided on this website</li>
                        </ul>
                    </section>
                </FadeInStaggerItem>

                <FadeInStaggerItem direction="up">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify or replace these Terms at any time at our sole discretion. Your continued use of the Service after any changes to the Terms constitutes acceptance of those changes.
                        </p>
                    </section>
                </FadeInStaggerItem>
            </FadeInStagger>
        </main>
    );
}
