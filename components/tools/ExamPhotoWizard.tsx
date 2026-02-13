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
import { getCroppedCanvas, resizeCanvas, addDateToPhoto, compressToTargetSize, applyBlackInkFilter, enhanceLegibility } from "@/lib/image-processing";
import { Upload, Download, RefreshCw, AlertCircle, Calendar, Wand2, Droplets } from "lucide-react";
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
            nameAndDateOnPhoto?: boolean;
            forceSquare?: boolean;
            isSignature?: boolean;
            isDeclaration?: boolean;
            blackInkOnly?: boolean;
            enhanceLegibility?: boolean;
        };
    };
}

export function ExamPhotoWizard({ title, config }: WizardProps) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    // State for Target KB input (default to maxKB)
    const [targetKB, setTargetKB] = useState(config.maxKB || 50);

    // State for Date & Name
    const [addDate, setAddDate] = useState(config.features?.dateOnPhoto || config.features?.nameAndDateOnPhoto || false);
    const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
    const [nameValue, setNameValue] = useState("");

    // State for Filters
    const [applyBlackInk, setApplyBlackInk] = useState(false);
    const [applyLegibility, setApplyLegibility] = useState(config.features?.enhanceLegibility || false);

    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [finalImage, setFinalImage] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [warningMsg, setWarningMsg] = useState<string | null>(null);

    // Update defaults if config changes
    useEffect(() => {
        setTargetKB(config.maxKB || 50);
        setAddDate(config.features?.dateOnPhoto || config.features?.nameAndDateOnPhoto || false);
        setApplyLegibility(config.features?.enhanceLegibility || false);
        setApplyBlackInk(false); // Default off unless user interacts, or maybe logic demands it? Prompt says "show switch"
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

            // 3. Apply Filters
            if (applyBlackInk) {
                applyBlackInkFilter(canvas);
            }
            if (applyLegibility) {
                enhanceLegibility(canvas);
            }

            // 4. Draw Date / Name (if enabled)
            if ((config.features?.dateOnPhoto || config.features?.nameAndDateOnPhoto) && addDate) {
                const [yyyy, mm, dd] = dateValue.split('-');
                const formattedDate = `${dd}-${mm}-${yyyy}`;

                let dateText = `DOP: ${formattedDate}`;
                const nameText = config.features?.nameAndDateOnPhoto ? nameValue : undefined;

                addDateToPhoto(canvas, dateText, nameText);
            }

            // 5. Compress to Target KB
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

            // Smart filename: SarkariPhoto_Exam_Title_Date.jpg
            const safeTitle = title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_').toLowerCase();
            const dateStr = new Date().toISOString().split('T')[0];
            link.download = `SarkariPhoto_${safeTitle}_${dateStr}.jpg`;

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
                        <div className="space-y-8">
                            {/* 1. Editor Section (Full Width) */}
                            <div className="space-y-6 max-w-2xl mx-auto w-full">
                                <div className="relative h-[450px] w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-800">
                                    <Cropper
                                        image={imageSrc}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={aspect}
                                        onCropChange={setCrop}
                                        onCropComplete={onCropComplete}
                                        onZoomChange={setZoom}
                                        showGrid={true}
                                        restrictPosition={false}
                                    />
                                    {/* Face Guide Overlay - Only for Photos */}
                                    {!config.features?.isSignature && !config.features?.isDeclaration && (
                                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                            <div className="w-[180px] h-[240px] border-2 border-white/50 rounded-[50%] shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"></div>
                                            <p className="absolute top-4 text-white/70 text-xs font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                                                Fit Face Here
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-6 bg-muted/30 p-6 rounded-xl border border-border/50">
                                    <Label className="w-16 font-medium text-base">Zoom</Label>
                                    <Slider
                                        value={[zoom]}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        onValueChange={(v: number[]) => setZoom(v[0])}
                                        className="flex-1 cursor-pointer"
                                    />
                                </div>
                            </div>

                            {/* 2. Controls Section (2-Column Grid) */}
                            <div className="bg-card border rounded-xl p-6 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Left Column: Settings & Filters */}
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label className="text-base font-semibold">Max File Size (KB)</Label>
                                            <div className="flex flex-col gap-2">
                                                <Input
                                                    type="number"
                                                    value={targetKB}
                                                    onChange={(e) => setTargetKB(Number(e.target.value))}
                                                    min={config.minKB || 10}
                                                    max={config.maxKB || 500}
                                                    className="h-12 text-lg w-full"
                                                />
                                                <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-2 rounded-md border w-fit">
                                                    Limit: {config.minKB}-{config.maxKB} KB
                                                </div>
                                            </div>
                                        </div>

                                        {/* Filters */}
                                        <div className="space-y-3">
                                            {(config.features?.blackInkOnly || config.features?.enhanceLegibility) && (
                                                <Label className="text-base font-semibold">Filters</Label>
                                            )}

                                            {config.features?.blackInkOnly && (
                                                <div className="flex items-center space-x-3 border p-3 rounded-lg bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                                                    <Checkbox
                                                        id="blackInk"
                                                        checked={applyBlackInk}
                                                        onCheckedChange={(c: boolean) => setApplyBlackInk(c)}
                                                    />
                                                    <Label htmlFor="blackInk" className="cursor-pointer flex items-center gap-2 font-medium">
                                                        <Droplets className="w-4 h-4 text-slate-700 dark:text-slate-400" />
                                                        Convert to Black Ink
                                                    </Label>
                                                </div>
                                            )}

                                            {config.features?.enhanceLegibility && (
                                                <div className="flex items-center space-x-3 border p-3 rounded-lg bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                                                    <Checkbox
                                                        id="legibility"
                                                        checked={applyLegibility}
                                                        onCheckedChange={(c: boolean) => setApplyLegibility(c)}
                                                    />
                                                    <Label htmlFor="legibility" className="cursor-pointer flex items-center gap-2 font-medium">
                                                        <Wand2 className="w-4 h-4 text-green-700 dark:text-green-500" />
                                                        Enhance Legibility
                                                    </Label>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Date & Name */}
                                    <div className="space-y-6">
                                        {config.features?.dateOnPhoto && (
                                            <div className="space-y-4 border p-4 rounded-xl bg-yellow-50/50 border-yellow-100 dark:bg-yellow-900/10 dark:border-yellow-800/50">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id="date"
                                                        checked={addDate}
                                                        onCheckedChange={(c: boolean) => setAddDate(c)}
                                                    />
                                                    <Label htmlFor="date" className="cursor-pointer font-bold text-yellow-900 dark:text-yellow-500">
                                                        Add Date of Photo
                                                    </Label>
                                                </div>
                                                {addDate && (
                                                    <Input
                                                        type="date"
                                                        value={dateValue}
                                                        onChange={(e) => setDateValue(e.target.value)}
                                                        className="bg-white dark:bg-black"
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {config.features?.nameAndDateOnPhoto && (
                                            <div className="space-y-4 border p-4 rounded-xl bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-800/50">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id="namedate"
                                                        checked={addDate}
                                                        onCheckedChange={(c: boolean) => setAddDate(c)}
                                                    />
                                                    <Label htmlFor="namedate" className="cursor-pointer font-bold text-blue-900 dark:text-blue-500">
                                                        Add Name & Date (Required)
                                                    </Label>
                                                </div>
                                                {addDate && (
                                                    <div className="space-y-4">
                                                        <div className="space-y-1">
                                                            <Label className="text-xs font-semibold text-blue-800 dark:text-blue-400">Candidate Name</Label>
                                                            <input
                                                                type="text"
                                                                placeholder="ENTER YOUR NAME"
                                                                value={nameValue}
                                                                onChange={(e) => setNameValue(e.target.value.toUpperCase())}
                                                                className="w-full p-3 font-bold text-center border-2 border-input rounded-xl bg-background text-foreground uppercase placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                            />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <Label className="text-xs font-semibold text-blue-800 dark:text-blue-400">Date of Photo</Label>
                                                            <div className="relative">
                                                                <input
                                                                    type="date"
                                                                    value={dateValue}
                                                                    onChange={(e) => setDateValue(e.target.value)}
                                                                    className="w-full p-3 font-bold text-center border-2 border-input rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Warnings */}
                                {config.features?.blackInkOnly && !applyBlackInk && (
                                    <Alert className="mt-6 bg-slate-100 border-slate-300 dark:bg-slate-900 dark:border-slate-700">
                                        <AlertTitle>Requirement</AlertTitle>
                                        <AlertDescription>Please use <strong>Black Ink</strong> on white paper.</AlertDescription>
                                    </Alert>
                                )}

                                {/* Generate Button */}
                                <Button
                                    size="lg"
                                    className="w-full mt-8 font-bold text-lg h-14 shadow-xl"
                                    onClick={handleGenerate}
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
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
