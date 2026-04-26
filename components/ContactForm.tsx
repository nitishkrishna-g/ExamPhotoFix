"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!name || !email || !message) return;

        const mailtoLink = `mailto:support@examresizer.in?subject=${encodeURIComponent(subject || "Message from " + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;

        setSubmitted(true);
    }

    if (submitted) {
        return (
            <Card className="hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col items-center justify-center text-center py-16 px-8 gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                        Your email client should have opened. If not, write to us directly at{" "}
                        <a href="mailto:support@examresizer.in" className="text-primary hover:underline font-medium">
                            support@examresizer.in
                        </a>
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 rounded-full" onClick={() => setSubmitted(false)}>
                        Send Another Message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                            <Input id="name" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                            <Input id="email" type="email" placeholder="your@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="e.g., UPSC photo not uploading" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                        <Textarea
                            id="message"
                            placeholder="Describe your issue or question in detail. Include which exam and which document type (photo/signature) you need help with."
                            rows={5}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </CardContent>
        </Card>
    );
}
