"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { joinSignatures } from "@/lib/image-processing";
import { AdPlaceholder } from "@/components/AdPlaceholder";

export function TripleSignature() {
    const [files, setFiles] = useState<(string | null)[]>([null, null, null]);
    const [processing, setProcessing] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleFileChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
                const newFiles = [...files];
                newFiles[index] = ev.target?.result as string;
                setFiles(newFiles);
                setResult(null); // Reset result
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (files.some(f => !f)) {
            alert("Please upload all 3 signatures.");
            return;
        }

        setProcessing(true);
        try {
            // Filter out nulls (TS check)
            const validFiles = files.filter((f): f is string => !!f);
            const mergedImage = await joinSignatures(validFiles);
            setResult(mergedImage);
        } catch (error) {
            console.error(error);
            alert("Failed to merge signatures.");
        } finally {
            setProcessing(false);
        }
    };

    const handleDownload = () => {
        if (result) {
            const link = document.createElement('a');
            link.href = result;
            link.download = `upsc-triple-sig-${Date.now()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Card className="max-w-2xl mx-auto border-2 border-primary/10">
            <CardHeader>
                <CardTitle>UPSC Triple Signature Merger</CardTitle>
                <CardDescription>Upload 3 signature files to merge them vertically for UPSC Mains/DAF.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[0, 1, 2].map((idx) => (
                        <div key={idx} className="space-y-2">
                            <Label>Signature {idx + 1}</Label>
                            <div className="border-2 border-dashed rounded-lg p-4 h-32 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-muted/50 relative dark:bg-slate-900 dark:border-slate-800">
                                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange(idx)} />
                                {files[idx] ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={files[idx]!}
                                            alt={`Sig ${idx + 1}`}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                ) : (
                                    <div className="text-muted-foreground">
                                        <Upload className="w-6 h-6 mx-auto mb-2" />
                                        <span className="text-xs">Upload</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Button
                    className="w-full"
                    size="lg"
                    disabled={files.some(f => !f) || processing}
                    onClick={handleGenerate}
                >
                    {processing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    {processing ? "Merging..." : "Merge Signatures"}
                </Button>

                {result && (
                    <div className="border rounded-lg p-4 bg-slate-50 flex flex-col items-center space-y-4 animate-in fade-in">
                        <Label>Result Preview</Label>
                        <div className="border p-2 bg-white shadow-sm flex justify-center">
                            <Image
                                src={result}
                                alt="Merged"
                                width={350}
                                height={500}
                                className="max-h-[300px] w-auto h-auto"
                                unoptimized
                            />
                        </div>

                        <AdPlaceholder width="100%" height="80px" label="Ad Space" />

                        <div className="flex gap-4 w-full justify-center">
                            <Button variant="outline" onClick={() => setResult(null)}>Edit</Button>
                            <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700">
                                <Download className="w-4 h-4 mr-2" /> Download Merged
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
