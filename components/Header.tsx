import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
    return (
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white font-bold p-1 rounded">SP</div>
                    <span className="font-bold text-xl text-blue-900 tracking-tight">SarkariPhoto.in</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link href="#tools" className="hover:text-blue-600 transition-colors">Tools</Link>
                    <Link href="#guide" className="hover:text-blue-600 transition-colors">Guide</Link>
                    <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </div>
            </div>
        </header>
    );
}
