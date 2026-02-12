"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getCroppedImg } from "@/lib/image-processing";
import { Upload, Download, RefreshCw, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PrivacyBadge } from "@/components/PrivacyBadge";
import { AffiliateSection } from "@/components/AffiliateSection";

// Presets configuration
const PRESETS = {
    UPSC: { width: 350, height: 350, aspect: 1, label: "UPSC (350x350px)", minKB: 20, maxKB: 300 },
    SSC: { width: 413, height: 531, aspect: 3.5 / 4.5, label: "SSC (3.5x4.5cm)", minKB: 20, maxKB: 50 },
    IBPS: { width: 413, height: 531, aspect: 4.5 / 3.5, label: "IBPS PO (4.5x3.5cm)", minKB: 20, maxKB: 50 }, // IBPS is usually 3.5x4.5 photo, signature differs
    CUSTOM: { width: 400, height: 400, aspect: 1, label: "Custom (Free Crop)", minKB: 10, maxKB: 500 }
};

export function ExamPhotoWizard() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [quality, setQuality] = useState(0.9);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [examType, setExamType] = useState<keyof typeof PRESETS>("UPSC");
    const [addDate, setAddDate] = useState(false);
    const [finalImage, setFinalImage] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<string | null>(null);

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const imageDataUrl = await readFile(file);
            setImageSrc(imageDataUrl);
            setFinalImage(null);
            setZoom(1);
        }
    };

    const readFile = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => resolve(reader.result as string));
            reader.readAsDataURL(file);
        });
    };

    const handleGenerate = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        try {
            const preset = PRESETS[examType];
            const dateStr = addDate ? new Date().toLocaleDateString('en-GB').split('/').join('-') : undefined; // DD-MM-YYYY

            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                0, // rotation
                { horizontal: false, vertical: false }, // flip
                preset.width,
                preset.height,
                dateStr,
                quality
            );

            setFinalImage(croppedImage);

            // Calculate approximate size (Base64 length * 0.75)
            const sizeInBytes = (croppedImage.length * 3) / 4;
            const sizeKB = sizeInBytes / 1024;
            setFileSize(sizeKB.toFixed(1) + " KB");

        } catch (e) {
            console.error(e);
            alert("Failed to generate image.");
        }
    };

    const downloadImage = () => {
        if (finalImage) {
            const link = document.createElement("a");
            link.href = finalImage;
            link.download = `sarkari-photo-${examType}-${Date.now()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const reset = () => {
        setImageSrc(null);
        setFinalImage(null);
        setZoom(1);
    };

    return (
        <Card className="w-full border-2 border-blue-100 shadow-sm bg-white">
            <CardHeader className="bg-blue-50/50 border-b border-blue-100">
                <CardTitle className="text-xl text-blue-900 flex items-center justify-between">
                    Exam Photo Wizard
                    {imageSrc && <Button variant="ghost" size="sm" onClick={reset}><RefreshCw className="w-4 h-4 mr-1" /> Reset</Button>}
                </CardTitle>
                <CardDescription>Resize & crop photos for UPSC, SSC & more.</CardDescription>
            </CardHeader>

            <CardContent className="p-6">
                {!imageSrc ? (
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:bg-slate-50 transition-colors cursor-pointer relative">
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
                            <p className="font-semibold text-slate-700">Click to Upload Photo</p>
                            <p className="text-sm text-slate-500">Supports JPG, PNG up to 5MB</p>
                        </div>
                        <PrivacyBadge />
                    </div>
                ) : !finalImage ? (
                    <div className="space-y-6">
                        <div className="relative h-[400px] w-full bg-slate-900 rounded-lg overflow-hidden">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={PRESETS[examType].aspect}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                                showGrid={true}
                            />
                            {/* Overlay Guide for Face (Generic) */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="border-2 border-white/50 rounded-[50%] w-[40%] h-[60%] shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"></div>
                            </div>
                            <div className="absolute top-4 left-0 right-0 text-center pointer-events-none">
                                <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                                    Fit face inside the oval (75% Coverage)
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Zoom</Label>
                                    <Slider
                                        value={[zoom]}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        onValueChange={(v) => setZoom(v[0])}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Quality: {Math.round(quality * 100)}%</Label>
                                    <Slider
                                        value={[quality]}
                                        min={0.1}
                                        max={1.0}
                                        step={0.05}
                                        onValueChange={(v) => setQuality(v[0])}
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="date"
                                        checked={addDate}
                                        onCheckedChange={(c) => setAddDate(c as boolean)}
                                    />
                                    <Label htmlFor="date" className="cursor-pointer">Add Date of Photo (Current Date)</Label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Select Exam</Label>
                                    <Select value={examType} onValueChange={(v: any) => setExamType(v)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Exam" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(PRESETS).map(([key, p]) => (
                                                <SelectItem key={key} value={key}>{p.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleGenerate}>
                                    Generate Photo
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="border p-2 rounded-lg shadow-sm bg-white">
                            <img src={finalImage} alt="Final" className="max-w-full max-h-[400px]" />
                        </div>

                        <div className="text-center space-y-1">
                            <p className="font-semibold text-green-600 flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5" /> Image Ready!
                            </p>
                            <p className="text-sm text-slate-500">
                                Approx Size: <span className="font-mono font-medium text-slate-900">{fileSize}</span>
                            </p>
                            {PRESETS[examType].maxKB && (
                                <p className="text-xs text-slate-400">
                                    Limit: {PRESETS[examType].minKB}-{PRESETS[examType].maxKB}KB
                                </p>
                            )}

                            {fileSize && examType !== 'CUSTOM' && (
                                <div className="mt-2 text-center">
                                    {(() => {
                                        const kb = parseFloat(fileSize.replace(" KB", ""));
                                        const min = PRESETS[examType].minKB;
                                        const max = PRESETS[examType].maxKB;
                                        const isCompliant = kb >= min && kb <= max;

                                        return (
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${isCompliant ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}`}>
                                                {isCompliant ? (
                                                    <>✅ Compliance Check: Passed</>
                                                ) : (
                                                    <>❌ Compliance Check: Failed ({min}-{max}KB required)</>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="outline" onClick={() => setFinalImage(null)} className="flex-1 md:flex-none">
                                Edit Again
                            </Button>
                            <Button onClick={downloadImage} className="flex-1 md:flex-none bg-green-600 hover:bg-green-700">
                                <Download className="w-4 h-4 mr-2" /> Download JPG
                            </Button>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <AlertCircle className="h-4 w-4 text-blue-600" />
                            <AlertTitle>Privacy Note</AlertTitle>
                            <AlertDescription className="text-blue-800">
                                Your photo was processed entirely in your browser. It was not uploaded to any server.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
                <div className="mt-8">
                    <AffiliateSection examType={examType} />
                </div>
            </CardContent>
        </Card>
    );
}

function CheckCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}
