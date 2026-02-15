"use client";

import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Camera, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { useState } from "react"

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex h-14 items-center justify-between relative">
                {/* Desktop Logo */}
                <div className="mr-4 hidden md:flex items-center ml-10">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Camera className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            SarkariPhoto.in
                        </span>
                    </Link>
                </div>

                {/* Centered Desktop Nav */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Home
                    </Link>
                    <Link href="/tools" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Tools
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        About Us
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Contact
                    </Link>
                    <Link href="/privacy-policy" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Privacy Policy
                    </Link>
                </nav>

                {/* Mobile Nav */}
                <div className="flex md:hidden items-center -ml-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden h-14 w-14 rounded-none bg-blue-600 text-white hover:bg-blue-700 hover:text-white dark:bg-purple-600 dark:hover:bg-purple-700">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] p-0">
                            <SheetHeader className="p-4 text-left">
                                <SheetTitle>
                                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                                        <Camera className="h-6 w-6" />
                                        <span className="font-bold">SarkariPhoto.in</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-2 p-4 pl-12">
                                <Link href="/" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
                                <Link href="/tools" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Tools</Link>
                                <Link href="/about" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>About Us</Link>
                                <Link href="/contact" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
                                <Link href="/privacy-policy" className="block py-2 text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Mobile Logo Centered */}
                <div className="flex flex-1 justify-center md:hidden">
                    <Link href="/" className="flex items-center space-x-2">
                        <Camera className="h-6 w-6" />
                        <span className="font-bold">
                            SarkariPhoto.in
                        </span>
                    </Link>
                </div>

                <div className="flex items-center justify-end space-x-2">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or other items could go here */}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
