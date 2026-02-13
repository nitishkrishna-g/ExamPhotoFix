
import { ExternalLink, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AffiliateSectionProps {
    examId?: string; // upsc, ssc, etc.
}

export function AffiliateSection({ examId }: AffiliateSectionProps) {
    // Map examId to Amazon Search Query
    const getQuery = (id?: string) => {
        switch (id?.toLowerCase()) {
            case "upsc":
                return "UPSC Civil Services General Studies Solved Papers";
            case "ssc":
                return "SSC CGL CHSL Exam Books";
            case "ibps":
                return "IBPS PO Clerk Banking Exam Books";
            case "rrb":
                return "RRB NTPC Group D Exam Books";
            case "neet":
                return "NEET UG Physics Chemistry Biology Books";
            default:
                return "Government Exam Competitve Books";
        }
    };

    const query = getQuery(examId);
    const tag = "sarkari-photo-21"; // Placeholder or User's tag

    // Generate generic links
    const booksLink = `https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${tag}`;
    const gadgetsLink = `https://www.amazon.in/s?k=student+study+accessories&tag=${tag}`;

    return (
        <Card className="border-2 border-dashed border-amber-200 bg-amber-50/40">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-amber-900">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    Recommended Study Materials
                </CardTitle>
                <CardDescription>
                    Top rated books and resources for {examId ? examId.toUpperCase() : "Exams"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                        href={booksLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:border-amber-400 hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-400">
                            IMG
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-amber-700">
                                Best Books for {examId?.toUpperCase() || "Exams"}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                                Latest editions, solved papers & guides
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                    </a>

                    <a
                        href={gadgetsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white rounded-lg border hover:border-amber-400 hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-400">
                            IMG
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-amber-700">
                                Study Accessories
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                                Table lamps, notebooks & stationery
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}
