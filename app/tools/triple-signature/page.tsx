
import { TripleSignature } from "@/components/tools/TripleSignature";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UPSC Triple Signature Merger - SarkariPhoto.in",
    description: "Merge 3 signatures vertically for UPSC Civil Services Mains/DAF form.",
};

export default function TripleSignaturePage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">UPSC Triple Signature Merger</h1>
            <TripleSignature />
        </div>
    );
}
