
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, Loader2 } from "lucide-react";
import { createPostcard } from "@/lib/image-processing";

import { AffiliateLinks } from "@/components/AffiliateLinks";

interface PostcardMakerProps {
    config?: {
        width?: number;
        height?: number;
        minKB?: number;
        maxKB?: number;
        aspect?: number;
        label?: string;
        features?: {
            dateOnPhoto?: boolean;
            nameAndDateOnPhoto?: boolean;
            forceSquare?: boolean;
            isSignature?: boolean;
            isDeclaration?: boolean;
            blackInkOnly?: boolean;
            enhanceLegibility?: boolean;
        };
    };
    affiliateLinks?: { label: string; url: string; note?: string }[];
}

export function PostcardMaker({ config, affiliateLinks }: PostcardMakerProps) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => setImageSrc(ev.target?.result as string);
            reader.readAsDataURL(e.target.files[0]);
            setResult(null);
        }
    };

    const generatePostcard = async () => {
        if (!imageSrc) return;
        setProcessing(true);
        try {
            const postcardDataUrl = await createPostcard(imageSrc);
            setResult(postcardDataUrl);
        } catch (e) {
            console.error(e);
            alert("Failed to create postcard.");
        } finally {
            setProcessing(false);
        }
    };

    const download = () => {
        if (result) {
            const link = document.createElement('a');
            link.href = result;
            link.download = `neet-postcard-${Date.now()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Card className="w-full border-2 border-primary/10 bg-card">
            <CardHeader>
                <CardTitle className="text-lg">Step 2: Postcard Size Generator (4x6 inch)</CardTitle>
                <CardDescription>Convert your passport photo to a 4x6 inch Postcard size with margins.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {!imageSrc ? (
                    <div className="border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 relative">
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
                        <Upload className="w-10 h-10 text-muted-foreground mb-4" />
                        <p className="font-medium">Upload Passport Photo</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-4">
                        <div className="bg-slate-100 p-2 rounded relative w-full h-32 flex justify-center">
                            <Image
                                src={imageSrc}
                                alt="Source"
                                width={200}
                                height={200}
                                className="h-full w-auto object-contain"
                                unoptimized
                            />
                        </div>
                        <Button onClick={generatePostcard} disabled={processing} className="w-full">
                            {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                            Generate Postcard
                        </Button>
                    </div>
                )}

                {result && (
                    <div className="space-y-4 animate-in slide-in-from-bottom-4 pt-4 border-t w-full flex flex-col items-center">
                        <p className="text-center font-semibold text-green-600">Postcard Ready!</p>
                        <div className="border p-2 bg-white shadow-sm flex justify-center">
                            <Image
                                src={result}
                                alt="Postcard"
                                width={300}
                                height={450}
                                className="max-h-[400px] w-auto"
                                unoptimized
                            />
                        </div>
                        <div className="flex gap-4 w-full">
                            <Button variant="outline" onClick={() => { setImageSrc(null); setResult(null); }} className="flex-1">
                                Start Over
                            </Button>
                            <Button onClick={download} className="flex-1 bg-green-600 hover:bg-green-700">
                                <Download className="mr-2" /> Download 4x6 inch JPG
                            </Button>
                        </div>
                        <AffiliateLinks links={affiliateLinks} title="Postcard Generator" />
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
