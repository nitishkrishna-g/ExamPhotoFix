import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-2xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="How can we help you?" />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>Or email us directly at:</p>
                        <a href="mailto:support@sarkariphoto.in" className="text-blue-600 hover:underline font-medium">support@sarkariphoto.in</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
