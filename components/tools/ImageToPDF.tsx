"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, FileDown, Trash2, FileText } from "lucide-react";
import { compressToTargetSize, loadImage } from "@/lib/image-processing";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AffiliateLinks } from "@/components/AffiliateLinks";

interface ImageToPDFProps {
    config?: {
        minKB?: number;
        maxKB?: number;
    };
    affiliateLinks?: { label: string; url: string; note?: string }[];
}

export function ImageToPDF({ config, affiliateLinks }: ImageToPDFProps) {
    const [images, setImages] = useState<{ src: string; file: File; id: string }[]>([]);
    const [processing, setProcessing] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [pdfSize, setPdfSize] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files).map(file => ({
                src: URL.createObjectURL(file), // Provide preview
                file,
                id: Math.random().toString(36).substr(2, 9)
            }));
            setImages(prev => [...prev, ...newImages]);
            setPdfUrl(null);
            setError(null);
        }
    };

    const removeImage = (id: string) => {
        setImages(prev => prev.filter(img => img.id !== id));
        setPdfUrl(null);
    };

    const generatePDF = async () => {
        if (images.length === 0) return;

        setProcessing(true);
        setError(null);

        try {
            const doc = new jsPDF();
            const maxTotalSizeKB = config?.maxKB || 300; // Default 300KB constraint from prompt

            // Calculate budget per image (naive approach: split evenly, or compress individually)
            // Better approach: Compress each image to a reasonable high quality, check PDF size.
            // If too big, aggressively compress.

            // For now, let's try to compress each image to ensure they fit. 
            // If we have N images, and max is 300KB. 
            // Let's target (Max - 50KB overhead) / N per image.
            const overhead = 20; // KB
            const targetPerImage = Math.floor((maxTotalSizeKB - overhead) / images.length);

            // Ensure at least 20KB per image
            const safeTarget = Math.max(targetPerImage, 20);

            for (let i = 0; i < images.length; i++) {
                const imgItem = images[i];
                const img = await loadImage(imgItem.src);

                // Create a canvas to compress
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) continue;
                ctx.drawImage(img, 0, 0);

                // Compress
                const compressed = await compressToTargetSize(canvas, safeTarget);

                // Convert blob to base64 for jspdf
                const base64 = await new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.readAsDataURL(compressed.blob);
                });

                const imgProps = doc.getImageProperties(base64);

                // Scale to fit A4 page (210 x 297 mm)
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = doc.internal.pageSize.getHeight();

                // Margin
                const margin = 10;
                const availableWidth = pdfWidth - (margin * 2);
                const availableHeight = pdfHeight - (margin * 2);

                const ratio = Math.min(availableWidth / imgProps.width, availableHeight / imgProps.height);
                const w = imgProps.width * ratio;
                const h = imgProps.height * ratio;

                const x = (pdfWidth - w) / 2;
                const y = margin;

                if (i > 0) doc.addPage();
                doc.addImage(base64, 'JPEG', x, y, w, h);
            }

            const pdfBlob = doc.output('blob');
            const sizeKB = pdfBlob.size / 1024;

            if (sizeKB > maxTotalSizeKB) {
                setError(`PDF size (${sizeKB.toFixed(0)} KB) exceeds limit (${maxTotalSizeKB} KB). Try fewer images.`);
            }

            setPdfUrl(URL.createObjectURL(pdfBlob));
            setPdfSize(`${sizeKB.toFixed(1)} KB`);

        } catch (err) {
            console.error(err);
            setError("Failed to generate PDF");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Card className="w-full border-2 border-dashed border-primary/20 shadow-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-500" />
                    Image to PDF Converter
                </CardTitle>
                <CardDescription>
                    Convert images to a single PDF document. Auto-compressed to {config?.maxKB || 300} KB.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* Upload Area */}
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">JPG, PNG (MAX. 5MB)</p>
                        </div>
                        <input type="file" className="hidden" multiple accept="image/*" onChange={handleFileUpload} />
                    </label>
                </div>

                {/* Image Preview List */}
                {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((img, idx) => (
                            <div key={img.id} className="relative group aspect-[3/4] rounded-lg overflow-hidden border bg-black/5">
                                <img src={img.src} alt={`Page ${idx + 1}`} className="object-contain w-full h-full" />
                                <button
                                    onClick={() => removeImage(img.id)}
                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                                    Page {idx + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error */}
                {error && (
                    <Alert variant="destructive">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-3 border-t pt-4">
                    {images.length > 0 && !pdfUrl && (
                        <Button onClick={generatePDF} disabled={processing} className="w-full md:w-auto">
                            {processing ? "Generating..." : "Generate PDF"}
                        </Button>
                    )}

                    {pdfUrl && (
                        <div className="w-full space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 text-green-800 rounded-lg border border-green-200">
                                <span className="font-medium flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    PDF Ready
                                </span>
                                <span className="text-sm font-bold">{pdfSize}</span>
                            </div>
                            <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                                <a href={pdfUrl} download="sarkari-document.pdf">
                                    <FileDown className="w-4 h-4 mr-2" /> Download PDF
                                </a>
                            </Button>
                            <Button variant="ghost" onClick={() => setPdfUrl(null)} className="w-full text-sm">
                                Generate Another
                            </Button>
                            <AffiliateLinks links={affiliateLinks} title="Image to PDF" />
                        </div>
                    )}
                </div>

            </CardContent>
        </Card>
    );
}
