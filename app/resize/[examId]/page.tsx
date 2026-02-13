
import { EXAMS } from "@/lib/exam-config";
import { ExamPhotoWizard } from "@/components/tools/ExamPhotoWizard";
import { SignatureJoiner } from "@/components/tools/SignatureJoiner";
import { PostcardMaker } from "@/components/tools/PostcardMaker";
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
        <main className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                        {config.title}
                    </h1>
                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl text-left shadow-sm">
                        <h2 className="font-semibold text-lg text-blue-900 mb-2">{config.content.heading}</h2>
                        <div
                            className="prose prose-sm text-slate-700"
                            dangerouslySetInnerHTML={{ __html: config.content.descriptionHtml }}
                        />
                    </div>
                </section>

                {/* Tools Section */}
                <section className="space-y-12">
                    {config.tools.map((tool, index) => {
                        return (
                            <div key={index} id={`tool-${index}`} className="scroll-mt-20">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 px-2 border-l-4 border-blue-600">
                                    {tool.title}
                                </h3>

                                {tool.type === "PHOTO_WIZARD" && (
                                    <ExamPhotoWizard config={tool.config || {}} title={tool.title} />
                                )}

                                {tool.type === "SIGNATURE_JOINER" && (
                                    <SignatureJoiner config={tool.config} />
                                )}

                                {tool.type === "POSTCARD_MAKER" && (
                                    <PostcardMaker config={tool.config} />
                                )}

                                {/* Ad between tools */}
                                {index < config.tools.length - 1 && (
                                    <div className="py-8">
                                        <AdPlaceholder slot="inter-tool" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>
        </main>
    );
}
