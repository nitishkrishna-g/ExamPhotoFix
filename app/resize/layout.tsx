export default function ResizeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background text-foreground">
            {/* Main Content Area */}
            <div className="flex-1 w-full transition-all duration-300">
                {children}
            </div>
        </div>
    );
}
