export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">About SarkariPhoto.in</h1>
            <div className="prose dark:prose-invert">
                <p className="text-lg mb-6">
                    SarkariPhoto.in is a free, privacy-focused utility tool designed to help Indian government exam aspirants format their documents correctly.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
                <p>
                    Every year, thousands of applications for exams like UPSC, SSC, and IBPS are rejected simply due to incorrect photo dimensions or file sizes.
                    Complex requirements (like 3.5cm x 4.5cm, 20-50KB, white background) can be difficult to manage with standard editing software.
                </p>
                <p>
                    We built this tool to automate that process. Our goal is to ensure <strong>0% rejection rate</strong> due to photo/media technicalities.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Why Trust Us?</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Privacy First:</strong> We do not store your photos. All processing happens locally in your browser using WebAssembly and Canvas APIs.</li>
                    <li><strong>Updated Guidelines:</strong> We actively monitor official notifications from UPSC, SSC, RRB, and IBPS to ensure our presets are up-to-date for 2026.</li>
                    <li><strong>Free Forever:</strong> This tool is and will always be free for students.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                <p>
                    Have a suggestion or found a bug? Reach out to us at <a href="mailto:support@sarkariphoto.in" className="text-blue-600 hover:underline">support@sarkariphoto.in</a>.
                </p>
            </div>
        </div>
    );
}
