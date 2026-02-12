import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AffiliateSectionProps {
    examType?: string; // UPSC, SSC, IBPS, etc.
}

export function AffiliateSection({ examType = "General" }: AffiliateSectionProps) {
    // Mock data - replace with real Amazon Affiliate links
    const resources = [
        {
            title: `${examType === 'General' ? 'UPSC' : examType} Previous Year Papers`,
            description: "Solved papers from last 10 years. Essential for preparation.",
            link: "https://www.amazon.in/s?k=upsc+previous+year+papers&tag=YOUR_TAG_HERE",
            image: "https://placehold.co/100x140/e2e8f0/475569?text=Book",
        },
        {
            title: "Best Selling Guide 2026",
            description: "Complete study material and strategy guide.",
            link: "https://www.amazon.in/s?k=upsc+books&tag=YOUR_TAG_HERE",
            image: "https://placehold.co/100x140/e2e8f0/475569?text=Guide",
        }
    ];

    return (
        <Card className="mt-8 border-dashed border-2 border-slate-200 bg-slate-50/50">
            <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                    Recommended Resources for {examType}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resources.map((res, idx) => (
                        <div key={idx} className="flex gap-4 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow">
                            <div className="w-16 h-24 bg-slate-200 rounded flex-shrink-0 overflow-hidden">
                                <img src={res.image} alt={res.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <h4 className="font-semibold text-sm text-slate-900 line-clamp-2">{res.title}</h4>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{res.description}</p>
                                </div>
                                <Button variant="link" size="sm" className="p-0 h-auto self-start text-blue-600" asChild>
                                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                                        View on Amazon <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
