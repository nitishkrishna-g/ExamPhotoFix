
import { EXAMS } from "@/lib/exam-config";
import { ExamPhotoWizard } from "@/components/tools/ExamPhotoWizard";
import { SignatureJoiner } from "@/components/tools/SignatureJoiner";
import { PostcardMaker } from "@/components/tools/PostcardMaker";
import { HandwrittenDeclaration } from "@/components/tools/HandwrittenDeclaration";
import { ImageToPDF } from "@/components/tools/ImageToPDF";
import { ExamSidebar } from "@/components/ExamSidebar";
import { FAQSection } from "@/components/FAQSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";

interface Props {
    params: {
        examId: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { examId } = await params;
    const config = EXAMS[examId.toLowerCase()];
    if (!config) {
        return {
            title: "Exam Not Found - SarkariPhoto.in",
            description: "The requested exam photo tool could not be found.",
        };
    }
    return {
        title: config.metaTitle,
        description: config.metaDescription,
        openGraph: {
            title: config.metaTitle,
            description: config.metaDescription,
        }
    };
}

export default async function ResizePage({ params }: Props) {
    const { examId } = await params;
    const config = EXAMS[examId.toLowerCase()];

    if (!config) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": `${config.title} Resizer`,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "description": config.metaDescription,
        "featureList": "Resize photo, Signature joiner, Date on photo",
    };

    return (
        <main className="container mx-auto py-8 px-4 lg:px-8 max-w-7xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] xl:grid-cols-[250px_1fr_300px] gap-8 relative">

                {/* Left Column: Sidebar (Sticky) */}
                {/* Left Column: Sidebar (Sticky) */}
                <ExamSidebar className="hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto" />

                {/* Center Column: Content & Tools */}
                <div className="space-y-12 min-w-0">

                    {/* Top Horizontal Ad */}
                    <div className="w-full flex justify-center bg-muted/20 border border-border/50 rounded-lg p-2 min-h-[100px]">
                        <AdPlaceholder slot="top-horizontal" width="100%" height={90} className="max-w-[728px]" label="Ad Space (Top Leaderboard)" />
                    </div>

                    {/* Header Section */}
                    <section className="text-center space-y-6 mb-12">
                        <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                            {config.title}
                        </h1>
                        <div className="glass p-8 rounded-3xl text-left">
                            <h2 className="font-bold text-xl text-primary mb-4 flex items-center gap-3">
                                <span className="bg-primary/10 p-2 rounded-lg text-2xl">ℹ️</span>
                                {config.content.heading}
                            </h2>
                            <div
                                className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: config.content.descriptionHtml }}
                            />
                        </div>
                    </section>

                    {/* Tools Section */}
                    <section className="space-y-24">
                        {config.tools.map((tool, index) => {
                            return (
                                <div key={index} id={`tool-${index}`} className="scroll-mt-32 space-y-8">

                                    {/* Tool label & Instructions */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                                {tool.title}
                                            </h3>
                                        </div>

                                        {/* Render Tool Instructions immediately above the tool */}
                                        {tool.instructions && (
                                            <div className="ml-0 md:ml-16 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                                                <div
                                                    className="prose prose-sm dark:prose-invert max-w-none text-blue-900 dark:text-blue-100"
                                                    dangerouslySetInnerHTML={{ __html: tool.instructions }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Tool Component */}
                                    <div className="md:ml-16 rounded-3xl overflow-hidden glass">
                                        {tool.type === "PHOTO_WIZARD" && (
                                            <ExamPhotoWizard config={tool.config || {}} title={tool.title} />
                                        )}

                                        {tool.type === "SIGNATURE_JOINER" && (
                                            <SignatureJoiner config={tool.config} />
                                        )}

                                        {tool.type === "POSTCARD_MAKER" && (
                                            <PostcardMaker config={tool.config} />
                                        )}

                                        {tool.type === "DECLARATION_GENERATOR" && (
                                            <HandwrittenDeclaration config={tool.config || {}} />
                                        )}

                                        {tool.type === "IMAGE_TO_PDF" && (
                                            <ImageToPDF config={tool.config} />
                                        )}
                                    </div>

                                    {/* Ad between tools */}
                                    {index < config.tools.length - 1 && (
                                        <div className="py-12 flex justify-center">
                                            <div className="w-full max-w-[728px] h-[90px] bg-muted/30 rounded-lg overflow-hidden border border-border/50 flex items-center justify-center">
                                                <AdPlaceholder slot="inter-tool" width="100%" height={90} label="Ad Space (Between Tools)" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </section>

                    {/* Bottom Horizontal Ad (Before FAQ) */}
                    <div className="w-full flex justify-center bg-muted/20 border border-border/50 rounded-lg p-2 my-12 min-h-[100px]">
                        <AdPlaceholder slot="bottom-horizontal" width="100%" height={90} className="max-w-[728px]" label="Ad Space (Bottom Leaderboard)" />
                    </div>

                    {/* FAQ Section */}
                    {config.faqs && config.faqs.length > 0 && (
                        <section className="mt-24 pt-12 border-t">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
                                <p className="text-muted-foreground">Common queries about {config.title}</p>
                            </div>
                            <FAQSection items={config.faqs} />
                        </section>
                    )}
                </div>

                {/* Right Column: Ad Slot (Sticky) */}
                <aside className="hidden xl:block h-[calc(100vh-6rem)] sticky top-24">
                    <div className="h-full flex flex-col space-y-4">
                        <div className="bg-muted/50 border border-border rounded-xl w-full max-w-[300px] flex-1 flex items-center justify-center text-muted-foreground text-sm font-medium shadow-sm overflow-hidden">
                            <AdPlaceholder slot="sidebar-right-skyscraper" width="100%" height="100%" label="Ad Space (Fluid Skyscraper)" />
                        </div>
                        <div className="text-center text-xs text-muted-foreground p-2 bg-muted/20 rounded-lg">
                            <p>Advertisement</p>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
