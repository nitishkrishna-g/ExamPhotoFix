"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EXAMS } from "@/lib/exam-config";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExamSidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className={cn("pb-12 min-h-screen border-r bg-sidebar", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="flex items-center justify-between mb-2 px-4">
                        <h2 className="text-lg font-semibold tracking-tight text-sidebar-foreground">
                            Exam Tools
                        </h2>
                        <ThemeToggle />
                    </div>
                    <ScrollArea className="h-[calc(100vh-100px)] px-1">
                        <div className="space-y-1">
                            {Object.values(EXAMS).map((exam) => (
                                <Button
                                    key={exam.id}
                                    asChild // Uses shadcn asChild to wrap Link
                                    variant={pathname?.includes(`/resize/${exam.id}`) ? "secondary" : "ghost"}
                                    className="w-full justify-start font-medium"
                                >
                                    <Link href={`/resize/${exam.id}`}>
                                        {exam.title.split(" ")[0]} {/* Shorten name for sidebar */}
                                        <span className="ml-auto text-xs opacity-60">
                                            {exam.tools.length} Tools
                                        </span>
                                    </Link>
                                </Button>
                            ))}
                        </div>

                        <div className="mt-8 px-4 text-xs text-muted-foreground">
                            <p>More exams coming soon.</p>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
