
import { PostcardMaker } from "@/components/tools/PostcardMaker";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NEET Postcard Photo Maker - SarkariPhoto.in",
    description: "Create 4x6 inch postcard size photo for NEET UG exam from your passport photo.",
};

export default function PostcardPage() {
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">NEET Postcard Maker</h1>
            <PostcardMaker />
        </div>
    );
}
