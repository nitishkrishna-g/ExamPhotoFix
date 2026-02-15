import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolsGrid } from "@/components/ToolsGrid";

export default function ToolsPage() {
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
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white">
                    Govt Exam Photo <span className="text-primary">Tools</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Select your exam below to access specialized resizers, croppers, and date-stamp tools.
                </p>
            </section>

            {/* Tools Grid */}
            <section id="tools">
                <ToolsGrid />
            </section>

            {/* Ad Space (Bottom) */}
            <div className="mt-12 mb-8 flex justify-center">
                <AdPlaceholder className="w-full max-w-[728px] h-[90px]" label="Ad Space (Tools Bottom)" />
            </div>
        </div>
    );
}
