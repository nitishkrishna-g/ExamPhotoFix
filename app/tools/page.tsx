import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXAMS } from "@/lib/exam-config";
import { ArrowLeft, ArrowRight, FileCheck, Scissors, Camera, GraduationCap, TrainFront } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function ToolsPage() {

    // Helper to get icon
    const getIcon = (id: string) => {
        if (id.includes('upsc')) return GraduationCap;
        if (id.includes('ssc')) return Scissors;
        if (id.includes('ibps')) return FileCheck;
        if (id.includes('rrb')) return TrainFront;
        return Camera;
    }

    return (
        <div className="container mx-auto py-12 px-4">
            {/* Breadcrumb / Back */}
            <div className="mb-4">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            {/* Ad Space (Top) */}
            <div className="mb-8 flex justify-center">
                <AdPlaceholder className="w-full max-w-[728px] h-[90px]" label="Ad Space (Tools Top)" />
            </div>

            {/* Hero Section */}
            <section className="text-center mb-12 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                    Govt Exam Photo Tools
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Select your exam below to access specialized resizers, croppers, and date-stamp tools.
                </p>
            </section>

            {/* Tools Grid */}
            <section id="tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {Object.values(EXAMS).map((exam, index, array) => {
                    const Icon = getIcon(exam.id);
                    return (
                        <Fragment key={exam.id}>
                            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-primary/20 bg-white dark:bg-slate-950 dark:border-slate-800">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-primary/5 rounded-xl text-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-lg line-clamp-1">{exam.id.toUpperCase()}</CardTitle>
                                    </div>
                                    <CardDescription className="line-clamp-2 min-h-[40px]">{exam.title}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-sm text-gray-500 bg-slate-50 dark:bg-slate-900 p-2 rounded">
                                        <span className="font-semibold block mb-1">Includes:</span>
                                        <ul className="list-disc list-inside">
                                            {exam.tools.slice(0, 2).map((t, i) => (
                                                <li key={i}>{t.title}</li>
                                            ))}
                                            {exam.tools.length > 2 && <li>+ {exam.tools.length - 2} more</li>}
                                        </ul>
                                    </div>
                                    <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-primary dark:text-primary-foreground">
                                        <Link href={`/resize/${exam.id}`}>
                                            Open {exam.id.toUpperCase()} Tools <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Mobile Ad: Between every card */}
                            {index < array.length - 1 && (
                                <div className="md:hidden col-span-1 py-4">
                                    <AdPlaceholder className="w-full h-[90px]" label={`Ad Space (Mobile ${index + 1})`} />
                                </div>
                            )}

                            {/* Desktop Ad: After every 3rd card (Row Break) */}
                            {(index + 1) % 3 === 0 && index < array.length - 1 && (
                                <div className="hidden lg:block col-span-3 py-8">
                                    <AdPlaceholder className="w-full h-[90px]" label={`Ad Space (Desktop Row ${(index + 1) / 3})`} />
                                </div>
                            )}
                        </Fragment>
                    );
                })}
            </section>

            {/* Ad Space (Bottom) */}
            <div className="mt-12 mb-8 flex justify-center">
                <AdPlaceholder className="w-full max-w-[728px] h-[90px]" label="Ad Space (Tools Bottom)" />
            </div>
        </div>
    );
}
