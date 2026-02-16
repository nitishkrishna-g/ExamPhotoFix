
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
import { AffiliateSection } from "@/components/AffiliateSection";

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

                    {/* Recommended Resources (Affiliate) */}
                    <AffiliateSection links={config.affiliateLinks || []} />

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
                                            <ExamPhotoWizard
                                                config={tool.config || {}}
                                                title={tool.title}
                                                affiliateLinks={config.affiliateLinks}
                                            />
                                        )}

                                        {tool.type === "SIGNATURE_JOINER" && (
                                            <SignatureJoiner config={tool.config} affiliateLinks={config.affiliateLinks} />
                                        )}

                                        {tool.type === "POSTCARD_MAKER" && (
                                            <PostcardMaker config={tool.config} affiliateLinks={config.affiliateLinks} />
                                        )}

                                        {tool.type === "DECLARATION_GENERATOR" && (
                                            <HandwrittenDeclaration config={tool.config || {}} affiliateLinks={config.affiliateLinks} />
                                        )}

                                        {tool.type === "IMAGE_TO_PDF" && (
                                            <ImageToPDF config={tool.config} affiliateLinks={config.affiliateLinks} />
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
                    <div className="h-full flex flex-col space-y-4 overflow-y-auto no-scrollbar pb-10">
                        <div className="bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-100 dark:border-amber-900/50 rounded-xl p-4 shadow-sm">
                            <h3 className="text-sm font-bold text-amber-900 dark:text-amber-500 mb-3 flex items-center gap-2">
                                <span>📚</span> Recommended
                            </h3>
                            <div className="space-y-3">
                                {config.affiliateLinks?.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="sponsored noopener noreferrer"
                                        className="block p-3 bg-white dark:bg-black/40 border border-amber-100 dark:border-amber-900/50 rounded-lg hover:shadow-md hover:border-amber-300 transition-all text-xs"
                                    >
                                        <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1 line-clamp-2">
                                            {link.label}
                                        </p>
                                        {link.note && (
                                            <p className="text-[10px] text-slate-500 mb-2 line-clamp-2">
                                                {link.note}
                                            </p>
                                        )}
                                        <span className="text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
                                            View on Amazon ↗
                                        </span>
                                    </a>
                                ))}
                                <div className="text-[10px] text-slate-400 text-center mt-2">
                                    Ads by Amazon
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
