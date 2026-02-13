"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQSectionProps {
    items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
    if (!items || items.length === 0) return null;

    return (
        <div className="w-full space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary transition-colors">
                            {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
