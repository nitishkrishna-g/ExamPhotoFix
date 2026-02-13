
import { EXAMS } from "@/lib/exam-config";
import { ExamPhotoWizard } from "@/components/tools/ExamPhotoWizard";
import { SignatureJoiner } from "@/components/tools/SignatureJoiner";
import { PostcardMaker } from "@/components/tools/PostcardMaker";
import { HandwrittenDeclaration } from "@/components/tools/HandwrittenDeclaration";
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

    return (
        <main className="container mx-auto py-8 px-4 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8 relative items-start">

                {/* Main Content Column */}
                <div className="space-y-8 min-w-0">
                    {/* Header Section */}
                    <section className="text-center space-y-4 mb-8">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            {config.title}
                        </h1>
                        <div className="bg-card border border-border p-6 rounded-2xl text-left shadow-sm">
                            <h2 className="font-semibold text-lg text-primary mb-2 flex items-center gap-2">
                                <span className="bg-primary/10 p-1 rounded-md">ℹ️</span>
                                {config.content.heading}
                            </h2>
                            <div
                                className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: config.content.descriptionHtml }}
                            />
                        </div>
                    </section>

                    {/* Tools Section */}
                    <section className="space-y-16">
                        {config.tools.map((tool, index) => {
                            return (
                                <div key={index} id={`tool-${index}`} className="scroll-mt-24 space-y-4">

                                    {/* Tool Label & Instructions */}
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-foreground px-2 border-l-4 border-primary flex items-center">
                                            {tool.title}
                                        </h3>

                                        {/* Render Tool Instructions immediately above the tool */}
                                        {tool.instructions && (
                                            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                                                <div
                                                    className="prose prose-sm dark:prose-invert max-w-none text-amber-900 dark:text-amber-100"
                                                    dangerouslySetInnerHTML={{ __html: tool.instructions }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Tool Component */}
                                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-card">
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
                                    </div>

                                    {/* Ad between tools */}
                                    {index < config.tools.length - 1 && (
                                        <div className="py-8 flex justify-center">
                                            <div className="w-full max-w-[728px] bg-muted/30 rounded-lg overflow-hidden border border-border/50">
                                                <AdPlaceholder slot="inter-tool" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </section>
                </div>

                {/* Right Ad Column (Sticky) - Hidden on mobile/tablet, visible on XL */}
                <div className="hidden xl:block sticky top-8 space-y-8">
                    <div className="bg-muted/50 border border-border rounded-xl p-4 min-h-[600px] flex items-center justify-center text-muted-foreground text-sm font-medium">
                        <AdPlaceholder slot="sidebar-right-skyscraper" />
                    </div>
                </div>

            </div>
        </main>
    );
}
