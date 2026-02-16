import React from "react";

interface AffiliateLinksProps {
    links?: { label: string; url: string; note?: string }[];
    title: string;
}

export function AffiliateLinks({ links, title }: AffiliateLinksProps) {
    if (!links || links.length === 0) return null;

    return (
        <div className="w-full mt-8 pt-6 border-t animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-sm font-semibold text-muted-foreground mb-4 flex items-center justify-center gap-2">
                <span>🎉</span> Good luck with your {title}!
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 rounded-xl p-5 shadow-sm">
                <p className="text-xs font-bold text-blue-800 dark:text-blue-300 mb-4 uppercase tracking-wider flex items-center justify-between">
                    <span>Recommended For You</span>
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">Top Rated</span>
                </p>
                <div className="flex flex-col gap-3">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="group flex items-center gap-4 p-3 bg-white dark:bg-black/40 border border-blue-100 dark:border-blue-900/30 rounded-lg hover:shadow-md hover:border-blue-300 transition-all"
                        >
                            <div className="h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-full text-xl group-hover:scale-110 transition-transform">
                                📚
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                                    {link.label}
                                </p>
                                {link.note && (
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                        {link.note}
                                    </p>
                                )}
                            </div>
                            <div className="text-blue-400 group-hover:translate-x-1 transition-transform">
                                →
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-4 pt-3 border-t border-blue-100 dark:border-blue-900/30 text-[10px] text-slate-400 text-center">
                    As an Amazon Associate I earn from qualifying purchases.
                </div>
            </div>
        </div>
    );
}
