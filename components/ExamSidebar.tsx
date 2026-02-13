"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/ThemeToggle";

const EXAM_LINKS = [
    { title: "UPSC", id: "upsc" },
    { title: "SSC", id: "ssc" },
    { title: "IBPS", id: "ibps" },
    { title: "Railway", id: "railway" },
    { title: "NEET", id: "neet" },
    { title: "GATE", id: "gate" },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExamSidebar({ className, ...props }: SidebarProps) {
    const pathname = usePathname();

    return (
        <div className={cn("pb-12", className)} {...props}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="flex items-center justify-between mb-4 px-4">
                        <h2 className="text-lg font-semibold tracking-tight">
                            Exam Tools
                        </h2>
                        <ThemeToggle />
                    </div>
                    <p className="mb-4 px-4 text-sm text-muted-foreground">
                        Select an exam to resize
                    </p>
                    <div className="space-y-1">
                        {EXAM_LINKS.map((exam) => {
                            const href = `/resize/${exam.id}`;
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={exam.id}
                                    href={href}
                                    className={cn(
                                        buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
                                        "w-full justify-start",
                                        isActive && "bg-secondary"
                                    )}
                                >
                                    {exam.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
