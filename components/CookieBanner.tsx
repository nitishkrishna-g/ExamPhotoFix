"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie_consent";

export function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setVisible(true);
        }
    }, []);

    function accept() {
        localStorage.setItem(STORAGE_KEY, "accepted");
        setVisible(false);
    }

    function dismiss() {
        localStorage.setItem(STORAGE_KEY, "dismissed");
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-xl px-5 py-4">
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                        We use cookies for analytics (Google Analytics) and ads (Google AdSense) to keep this tool free.
                        Your photos are never uploaded — all processing is local.{" "}
                        <Link href="/privacy-policy" className="text-primary underline underline-offset-2 hover:opacity-80">
                            Privacy Policy
                        </Link>
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                        <Button size="sm" onClick={accept} className="rounded-full px-5 h-8 text-xs">
                            Accept All
                        </Button>
                        <Button size="sm" variant="outline" onClick={dismiss} className="rounded-full px-5 h-8 text-xs">
                            Dismiss
                        </Button>
                        <button
                            onClick={dismiss}
                            aria-label="Close cookie notice"
                            className="ml-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
