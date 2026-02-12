import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    label?: string;
}

export function AdPlaceholder({ className, width, height, label = "Ad Space" }: AdPlaceholderProps) {
    return (
        <div
            className={cn(
                "bg-gray-200 border-dashed border-2 border-gray-400 text-gray-500 flex items-center justify-center font-semibold rounded-lg",
                className
            )}
            style={{ width, height }}
            aria-label={label}
        >
            {label}
        </div>
    );
}
