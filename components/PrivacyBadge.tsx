import { ShieldCheck } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function PrivacyBadge() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full cursor-help w-fit mx-auto mt-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="font-medium">Privacy First</span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="max-w-[200px] text-xs">
                        Your photos never leave your device. All processing happens locally in your browser.
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
