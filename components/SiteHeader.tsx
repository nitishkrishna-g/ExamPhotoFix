"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Camera, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex h-14 items-center justify-between relative">

                {/* Desktop Logo */}
                <div className="hidden md:flex items-center">
                    <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
                        <Camera className="h-5 w-5 text-primary" />
                        <span>ExamResizer.in</span>
                    </Link>
                </div>

                {/* Centered Desktop Nav */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
                    {navLinks.map(({ href, label }) => {
                        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Hamburger */}
                <div className="flex md:hidden items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9"
                                aria-label="Open menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[280px] p-0">
                            <SheetHeader className="p-5 border-b">
                                <SheetTitle asChild>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 font-bold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Camera className="h-5 w-5 text-primary" />
                                        <span>ExamResizer.in</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col p-4 gap-1">
                                {navLinks.map(({ href, label }) => {
                                    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={cn(
                                                "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                                                isActive
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}
                                <Link
                                    href="/privacy-policy"
                                    className="px-4 py-2.5 rounded-lg text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Privacy Policy
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Mobile Logo (centered) */}
                <div className="flex flex-1 justify-center md:hidden">
                    <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
                        <Camera className="h-5 w-5 text-primary" />
                        <span>ExamResizer.in</span>
                    </Link>
                </div>

                {/* Right: Theme Toggle */}
                <div className="flex items-center">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
