"use client";

import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getCroppedCanvas, resizeCanvas, addDateToPhoto, compressToTargetSize } from "@/lib/image-processing";
import { Upload, Download, RefreshCw, AlertCircle, Calendar } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PrivacyBadge } from "@/components/PrivacyBadge";

// config from lib/exam-config
interface WizardProps {
    title: string;
    config: {
        width?: number;
        height?: number;
        aspect?: number;
        minKB?: number;
        maxKB?: number;
        features?: {
            dateOnPhoto?: boolean;
            forceSquare?: boolean;
            isSignature?: boolean;
            isDeclaration?: boolean;
            blackInkOnly?: boolean;
        };
    };
}

export function ExamPhotoWizard({ title, config }: WizardProps) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    // State for Target KB input (default to maxKB)
    const [targetKB, setTargetKB] = useState(config.maxKB || 50);

    // State for Date
    const [addDate, setAddDate] = useState(config.features?.dateOnPhoto || false);
    const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD

    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [finalImage, setFinalImage] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [warningMsg, setWarningMsg] = useState<string | null>(null);

    // Update defaults if config changes
    useEffect(() => {
        setTargetKB(config.maxKB || 50);
        setAddDate(config.features?.dateOnPhoto || false);
    }, [config]);

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
                setImageSrc(ev.target?.result as string);
                setFinalImage(null);
                setZoom(1);
                setWarningMsg(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        setProcessing(true);
        setWarningMsg(null);

        try {
            // 1. Crop
            let canvas = await getCroppedCanvas(imageSrc, croppedAreaPixels);

            // 2. Resize
            const targetWidth = config.width || 400;
            const targetHeight = config.height || 400;
            canvas = resizeCanvas(canvas, targetWidth, targetHeight);

            // 3. Draw Date (if enabled)
            if (config.features?.dateOnPhoto && addDate) {
                const [yyyy, mm, dd] = dateValue.split('-');
                const formattedDate = `${dd}-${mm}-${yyyy}`;
                addDateToPhoto(canvas, `DOP: ${formattedDate}`);
            }

            // 4. Compress to Target KB
            // Use user input targetKB, constrained by config.minKB ??
            const effectiveMaxKB = targetKB;

            const result = await compressToTargetSize(canvas, effectiveMaxKB);

            // Create URL
            const url = URL.createObjectURL(result.blob);
            setFinalImage(url);
            setFileSize(result.sizeKB.toFixed(1) + " KB");

            if (result.warning) {
                setWarningMsg(result.warning);
            }

        } catch (e) {
            console.error(e);
            alert("Failed to generate image.");
        } finally {
            setProcessing(false);
        }
    };

    const downloadImage = () => {
        if (finalImage) {
            const link = document.createElement("a");
            link.href = finalImage;
            link.download = `sarkari-photo-${Date.now()}.jpg`;
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

    const aspect = config.aspect || (config.features?.forceSquare ? 1 : (config.width && config.height ? config.width / config.height : 1));

    return (
        <Card className="w-full border-2 border-primary/10 shadow-lg bg-card text-card-foreground">
            <CardHeader className="bg-muted/50 border-b">
                <CardTitle className="text-xl flex items-center justify-between">
                    {title}
                    {imageSrc && (
                        <Button variant="ghost" size="sm" onClick={reset}>
                            <RefreshCw className="w-4 h-4 mr-1" /> Reset
                        </Button>
                    )}
                </CardTitle>
            </CardHeader>

            <CardContent className="p-6">
                {!imageSrc ? (
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:bg-muted/50 transition-colors cursor-pointer relative group">
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div className="bg-primary/10 p-4 rounded-full text-primary group-hover:scale-110 transition-transform">
                            <Upload className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Click to Upload Photo</p>
                            <p className="text-sm text-muted-foreground">Supports JPG, PNG</p>
                        </div>
                        <PrivacyBadge />
                    </div>
                ) : !finalImage ? (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Editor */}
                            <div className="lg:col-span-2 space-y-4">
                                <div className="relative h-[400px] w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner">
                                    <Cropper
                                        image={imageSrc}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={aspect}
                                        onCropChange={setCrop}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                        showGrid={true}
                                    />
                                </div>
                                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
                                    <Label className="w-16">Zoom</Label>
                                    <Slider
                                        value={[zoom]}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        onValueChange={(v) => setZoom(v[0])}
                                        className="flex-1"
                                    />
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Max File Size (KB)</Label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="number"
                                            value={targetKB}
                                            onChange={(e) => setTargetKB(Number(e.target.value))}
                                            min={config.minKB || 10}
                                            max={config.maxKB || 500}
                                        />
                                        <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                                            Limit: {config.minKB}-{config.maxKB} KB
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        We will compress quality until it fits this size.
                                    </p>
                                </div>

                                {config.features?.dateOnPhoto && (
                                    <div className="space-y-3 border p-3 rounded-lg bg-yellow-50 border-yellow-100">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="date"
                                                checked={addDate}
                                                onCheckedChange={(c) => setAddDate(c as boolean)}
                                            />
                                            <Label htmlFor="date" className="cursor-pointer font-bold text-yellow-900">
                                                Add Date of Photo (Required)
                                            </Label>
                                        </div>
                                        {addDate && (
                                            <Input
                                                type="date"
                                                value={dateValue}
                                                onChange={(e) => setDateValue(e.target.value)}
                                            />
                                        )}
                                    </div>
                                )}

                                {config.features?.blackInkOnly && (
                                    <Alert className="bg-slate-100 border-slate-300">
                                        <AlertTitle>Requirement</AlertTitle>
                                        <AlertDescription>Please use <strong>Black Ink</strong> on white paper.</AlertDescription>
                                    </Alert>
                                )}

                                <Button
                                    size="lg"
                                    className="w-full font-semibold shadow-lg"
                                    onClick={handleGenerate}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <><RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Processing...</>
                                    ) : (
                                        "Generate & Compress"
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="border-4 border-white shadow-xl rounded-lg overflow-hidden bg-white">
                            <img src={finalImage} alt="Final" className="max-w-full max-h-[500px]" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-green-600 flex justify-center gap-2 items-center">
                                Image Ready!
                            </h3>
                            <p className="text-lg">Size: <strong>{fileSize}</strong></p>
                            {warningMsg && <p className="text-red-500 text-sm mt-2">{warningMsg}</p>}
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="outline" size="lg" onClick={() => setFinalImage(null)} className="flex-1">
                                Edit Again
                            </Button>
                            <Button size="lg" onClick={downloadImage} className="flex-1 bg-green-600 hover:bg-green-700 shadow-md">
                                <Download className="w-4 h-4 mr-2" /> Download JPG
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
