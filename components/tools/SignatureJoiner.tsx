"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { joinSignatures } from "@/lib/image-processing";
import { Upload, Download, CheckCircle, RefreshCw, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PrivacyBadge } from "@/components/PrivacyBadge";
import { AffiliateSection } from "@/components/AffiliateSection";

export function SignatureJoiner() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [finalImage, setFinalImage] = useState<string | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    setImageSrc(ev.target.result as string);
                    setFinalImage(null);
                }
            }
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!imageSrc) return;
        try {
            const result = await joinSignatures(imageSrc);
            setFinalImage(result);
        } catch (e) {
            console.error(e);
            alert("Error processing signature");
        }
    }

    const downloadImage = () => {
        if (finalImage) {
            const link = document.createElement("a");
            link.href = finalImage;
            link.download = `triple-signature-${Date.now()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const reset = () => {
        setImageSrc(null);
        setFinalImage(null);
    }

    return (
        <Card className="w-full border-2 border-blue-100 shadow-sm bg-white">
            <CardHeader className="bg-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-xl text-blue-900 flex justify-between items-center">
                    Triple Signature Joiner
                    {imageSrc && <Button variant="ghost" size="sm" onClick={reset}><RefreshCw className="w-4 h-4 mr-1" /> Reset</Button>}
                </CardTitle>
                <CardDescription>Join 3 signatures vertically for UPSC 2026.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 min-h-[300px] flex flex-col items-center justify-center space-y-4">

                {!imageSrc ? (
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:bg-slate-50 transition-colors cursor-pointer relative w-full">
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                            <Upload className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-700">Upload Signature File</p>
                            <p className="text-sm text-slate-500">We will stack it 3 times automatically</p>
                        </div>
                        <PrivacyBadge />
                    </div>
                ) : !finalImage ? (
                    <div className="space-y-6 text-center w-full">
                        <div className="border p-4 rounded-lg bg-slate-50 inline-block">
                            <img src={imageSrc} alt="Preview" className="h-20 object-contain mx-auto" />
                        </div>
                        <div>
                            <Button onClick={handleGenerate} className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                                Generate Triple Signature
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-6 w-full">
                        <div className="border p-2 rounded-lg shadow-sm bg-white">
                            <img src={finalImage} alt="Final" className="max-w-full max-h-[400px]" />
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="outline" onClick={() => setFinalImage(null)} className="flex-1 md:flex-none">
                                Try Again
                            </Button>
                            <Button onClick={downloadImage} className="flex-1 md:flex-none bg-green-600 hover:bg-green-700">
                                <Download className="w-4 h-4 mr-2" /> Download JPG
                            </Button>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <AlertCircle className="h-4 w-4 text-blue-600" />
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription className="text-blue-800">
                                Triple signature generated successfully! 350x500px.
                            </AlertDescription>
                        </Alert>
                        <div className="w-full mt-4">
                            <AffiliateSection examType="UPSC" />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
