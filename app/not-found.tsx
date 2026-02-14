import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-6xl font-black text-primary mb-4">404</h2>
            <p className="text-2xl font-bold mb-2">Page Not Found</p>
            <p className="text-muted-foreground max-w-md mb-8">
                The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}
