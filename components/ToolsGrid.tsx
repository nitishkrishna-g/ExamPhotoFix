"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Search, X } from "lucide-react";
import { EXAMS, ExamPageConfig, ToolType } from "@/lib/exam-config";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { GraduationCap, Scissors, FileCheck, TrainFront, Camera } from "lucide-react";

// Helper to get icon (duplicated from page.tsx, could be moved to utils but fine here)
const getIcon = (id: string) => {
    if (id.includes('upsc')) return GraduationCap;
    if (id.includes('ssc')) return Scissors;
    if (id.includes('ibps')) return FileCheck;
    if (id.includes('rrb')) return TrainFront;
    return Camera;
}

export function ToolsGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Convert EXAMS object to array
    const allExams = useMemo(() => Object.values(EXAMS), []);

    // Filter exams based on search query
    const filteredExams = useMemo(() => {
        if (!searchQuery.trim()) return allExams;
        const query = searchQuery.toLowerCase();
        return allExams.filter((exam) =>
            exam.title.toLowerCase().includes(query) ||
            exam.id.toLowerCase().includes(query) ||
            exam.tools.some(t => t.title.toLowerCase().includes(query))
        );
    }, [searchQuery, allExams]);

    // Suggestions logic (limit to top 5)
    const suggestions = useMemo(() => {
        if (!searchQuery.trim()) return [];
        return filteredExams.slice(0, 5);
    }, [filteredExams, searchQuery]);

    // Close suggestions on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="space-y-8">
            {/* Search Bar Section */}
            <div ref={wrapperRef} className="relative max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search exams (e.g. UPSC, SSC, GATE)..."
                        className="pl-10 pr-10 h-12 text-lg bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm focus-visible:ring-primary"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setShowSuggestions(false);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>

                {/* Autocomplete Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 overflow-hidden">
                        <ul className="py-1">
                            {suggestions.map((exam) => (
                                <li key={exam.id}>
                                    <button
                                        className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                                        onClick={() => {
                                            setSearchQuery(exam.title);
                                            setShowSuggestions(false);
                                        }}
                                    >
                                        <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                                            {(() => {
                                                const Icon = getIcon(exam.id);
                                                return <Icon className="w-4 h-4" />
                                            })()}
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-foreground">{exam.title}</p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredExams.length > 0 ? (
                    filteredExams.map((exam, index) => {
                        const Icon = getIcon(exam.id);
                        return (
                            <div key={exam.id} className="contents">
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
                                {index < filteredExams.length - 1 && (
                                    <div className="md:hidden col-span-1 py-4">
                                        <AdPlaceholder className="w-full h-[90px]" label={`Ad Space (Mobile ${index + 1})`} />
                                    </div>
                                )}

                                {/* Ad Logic (Simplified for client component) */}
                                {(index + 1) % 3 === 0 && (
                                    <div className="hidden lg:block col-span-3 py-4">
                                        <AdPlaceholder className="w-full h-[90px]" label={`Ad Space (Row ${(index + 1) / 3})`} />
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-muted-foreground text-lg">No exams found matching "{searchQuery}"</p>
                        <Button variant="link" onClick={() => setSearchQuery("")}>Clear Search</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
