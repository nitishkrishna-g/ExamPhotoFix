"use client";

import { useEffect } from "react";

interface AdPlaceholderProps {
    className?: string;
    slot?: string;
    responsive?: boolean;
    format?: string;
    width?: number | string;
    height?: number | string;
    label?: string;
}

export function AdPlaceholder({ className, slot, responsive = true, format, width, height, label }: AdPlaceholderProps) {
    useEffect(() => {
        try {
            ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
        } catch {
            // AdSense not loaded yet or ad blocker active
        }
    }, []);

    return (
        <ins
            className={`adsbygoogle block overflow-hidden ${className || ""}`}
            style={{
                display: "block",
                width: width || "100%",
                height: height || "auto",
            }}
            data-ad-client="ca-pub-9381303427467084"
            data-ad-slot={slot}
            data-ad-format={format || (responsive ? "auto" : undefined)}
            data-full-width-responsive={responsive ? "true" : undefined}
            aria-label={label}
        />
    );
}
