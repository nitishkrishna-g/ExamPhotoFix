export default function TermsPage() {
    return (
        <main className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Terms of Service & Disclaimer</h1>

            <div className="prose dark:prose-invert max-w-none space-y-6">
                <section className="bg-muted/30 p-6 rounded-xl border border-border">
                    <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">⚠️ Important Disclaimer</h2>
                    <p className="font-medium">
                        SarkariPhoto.in is a free utility tool. We are NOT associated with any government organization (UPSC, SSC, IBPS, etc.).
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                        While we strive for accuracy, exam rules change frequently. Use this tool at your own risk.
                        We are NOT responsible for any form rejections, loss of fees, or disqualification arising from the use of this tool.
                        Always verify your final photo/signature against the official notification before uploading.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Privacy & Data</h2>
                    <p>
                        We are a client-side tool. Your photos and signatures are processed in your browser and are NOT uploaded to our servers.
                        However, we use Google Analytics to track anonymous usage statistics.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Limitation of Liability</h2>
                    <p>
                        In no event shall SarkariPhoto.in or its owners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SarkariPhoto.in.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Modifications</h2>
                    <p>
                        We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                </section>
            </div>
        </main>
    );
}
