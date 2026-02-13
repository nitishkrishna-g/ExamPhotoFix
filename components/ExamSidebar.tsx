"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXAM_LINKS = [
    { title: "UPSC", id: "upsc" },
    { title: "SSC", id: "ssc" },
    { title: "IBPS", id: "ibps" },
    { title: "Railway", id: "rrb" }, // Fixed ID to match config 'rrb' rather than 'railway' if that was intended, assuming 'rrb' from config. Using 'rrb' based on config file.
    { title: "NEET", id: "neet" },
    { title: "GATE", id: "gate" },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExamSidebar({ className, ...props }: SidebarProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const SidebarContent = () => (
        <div className="space-y-4 py-4 h-full">
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
    );

    return (
        <>
            {/* Mobile Floating Bubble Trigger */}
            <div className="lg:hidden fixed left-0 top-1/2 -translate-y-1/2 z-50">
                <Button
                    variant="default"
                    size="icon"
                    className="rounded-l-none rounded-r-full h-14 w-12 shadow-xl border-l-0 bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-95"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Sidebar</span>
                </Button>
            </div>

            {/* Mobile Overlay & Drawer */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transition-transform duration-300 ease-in-out lg:hidden",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-end p-2">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <SidebarContent />
            </div>

            {/* Desktop Sidebar */}
            <div className={cn("hidden lg:block pb-12 border-r bg-background/50 backdrop-blur-sm", className)} {...props}>
                <SidebarContent />
            </div>
        </>
    );
}
