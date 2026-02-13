export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: February 2026</p>

            <div className="prose dark:prose-invert space-y-6">
                <p>
                    At SarkariPhoto.in, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our image resizing and editing tools.
                </p>

                <h2 className="text-2xl font-bold">1. No Server Uploads</h2>
                <p>
                    We differ from most online photo editors. <strong>We do not upload your photos or signatures to any server.</strong> All image processing (cropping, resizing, compression) happens locally on your device (in your browser) using modern web technologies. Your files never leave your computer or phone.
                </p>

                <h2 className="text-2xl font-bold">2. Data We Collect</h2>
                <p>
                    Since we do not store user accounts or images, we collect minimal data:
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>Analytics:</strong> We use anonymous analytics (like Google Analytics) to understand how many users visit our site and which tools are popular. This data does not contain personal information.</li>
                    <li><strong>Cookies:</strong> We use local storage to remember simple preferences, like your "Dark Mode" setting.</li>
                </ul>

                <h2 className="text-2xl font-bold">3. Advertising</h2>
                <p>
                    We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ad Settings.
                </p>

                <h2 className="text-2xl font-bold">4. Changes to This Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>

                <h2 className="text-2xl font-bold">5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@sarkariphoto.in" className="text-blue-600 hover:underline">privacy@sarkariphoto.in</a>.
                </p>
            </div>
        </div>
    );
}
