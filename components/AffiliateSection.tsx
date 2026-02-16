"use client";

import { ExternalLink } from "lucide-react";

interface AffiliateLinkProps {
    label: string;
    url: string;
    note?: string;
}

interface AffiliateSectionProps {
    links: AffiliateLinkProps[];
}

export function AffiliateSection({ links }: AffiliateSectionProps) {
    if (!links || links.length === 0) return null;

    return (
        <section className="mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-900 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-500 mb-4 flex items-center gap-2">
                    <span>📚</span> Recommended Books & Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, i) => (
                        <div key={i} className="flex flex-col p-4 border rounded-lg bg-white dark:bg-black/40 hover:shadow-md transition-all border-amber-100 dark:border-amber-900/50 hover:border-amber-300">
                            <h3 className="font-medium text-sm text-slate-800 dark:text-slate-200">{link.label}</h3>
                            {link.note && <p className="text-xs text-slate-500 mb-2">{link.note}</p>}

                            <a
                                href={link.url}
                                target="_blank"
                                rel="sponsored noopener noreferrer"
                                className="mt-auto inline-flex items-center text-xs text-amber-600 hover:text-amber-700 hover:underline gap-1 pt-2"
                            >
                                View on Amazon <ExternalLink size={12} />
                            </a>
                        </div>
                    ))}
                </div>
                <AffiliateDisclaimer />
            </div>
        </section>
    );
}

export function AffiliateDisclaimer() {
    return (
        <p className="text-[10px] text-slate-400 mt-4 text-center">
            As an Amazon Associate I earn from qualifying purchases.
        </p>
    );
}
