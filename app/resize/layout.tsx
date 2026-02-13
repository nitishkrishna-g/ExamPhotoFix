import { ExamSidebar } from "@/components/ExamSidebar";

export default function ResizeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Sidebar - Hidden on mobile, visible on lg screens */}
            {/* We use 'lg:block' to show on large screens, 'hidden' on mobile */}
            <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 z-50 border-r border-border bg-sidebar h-full">
                <ExamSidebar className="h-full" />
            </aside>

            {/* Main Content Area */}
            {/* On desktop, add left padding equal to sidebar width */}
            <div className="flex-1 w-full lg:pl-64 transition-all duration-300">
                {children}
            </div>
        </div>
    );
}
