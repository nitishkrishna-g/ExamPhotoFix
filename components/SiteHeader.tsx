import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Camera } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 flex h-14 items-center justify-between">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Camera className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">
                            SarkariPhoto.in
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
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
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or other items could go here */}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
