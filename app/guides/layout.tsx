import { FadeIn } from "@/components/animations/fade-in";

export default function GuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <FadeIn>{children}</FadeIn>;
}
