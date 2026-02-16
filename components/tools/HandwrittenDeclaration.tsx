"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, RefreshCw } from "lucide-react";
import { compressToTargetSize } from "@/lib/image-processing";
import { AffiliateLinks } from "@/components/AffiliateLinks";

interface DeclarationProps {
    config: {
        minKB?: number;
        maxKB?: number;
    };
    affiliateLinks?: { label: string; url: string; note?: string }[];
}

export function HandwrittenDeclaration({ config, affiliateLinks }: DeclarationProps) {
    const [name, setName] = useState("");
    const [finalImage, setFinalImage] = useState<string | null>(null);
    const [fileSize, setFileSize] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Load custom font
    useEffect(() => {
        const font = new FontFace("Caveat", "url(https://fonts.gstatic.com/s/caveat/v17/Wnz6HAc5bAfYB2Q7ZjDglvV5.woff2)");
        font.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
        }).catch(err => console.log("Font load error", err));
    }, []);

    const generateDeclaration = async () => {
        if (!name.trim()) {
            alert("Please enter your name.");
            return;
        }

        const width = 800;
        const height = 400;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 1. Background (Paper Texture / Off-white with noise)
        ctx.fillStyle = "#f8f8f8";
        ctx.fillRect(0, 0, width, height);

        // Add noise
        for (let i = 0; i < 5000; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            ctx.fillStyle = Math.random() > 0.5 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.5)";
            ctx.fillRect(x, y, 1, 1);
        }

        // 2. Text Content
        const text = `I, ${name}, hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.`;

        // 3. Draw Text
        ctx.fillStyle = "black"; // Black Ink
        // Use Caveat if loaded, else Cursive/Handwriting fallback
        ctx.font = "32px 'Caveat', 'Brush Script MT', cursive";
        ctx.textBaseline = "top";

        const margin = 40;
        const maxWidth = width - (margin * 2);
        const lineHeight = 50;
        let y = 60;

        const words = text.split(" ");
        let line = "";

        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                // Add jitter for handwriting effect
                const jitterX = (Math.random() - 0.5) * 2;
                const jitterY = (Math.random() - 0.5) * 2;
                ctx.fillText(line, margin + jitterX, y + jitterY);
                line = words[n] + " ";
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, margin, y);

        // 4. Compress
        try {
            const result = await compressToTargetSize(canvas, config.maxKB || 100);
            const url = URL.createObjectURL(result.blob);
            setFinalImage(url);
            setFileSize(result.sizeKB.toFixed(1) + " KB");
        } catch (e) {
            console.error(e);
            alert("Compression failed");
        }
    };

    const downloadImage = () => {
        if (finalImage) {
            const link = document.createElement("a");
            link.href = finalImage;
            link.download = `ibps-declaration-${name.replace(/\s+/g, '-').toLowerCase()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Card className="w-full border-2 border-primary/10 shadow-lg">
            <CardHeader className="bg-muted/50 border-b">
                <CardTitle>IBPS/SBI Handwritten Declaration Generator</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {!finalImage ? (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Enter Your Name</Label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. John Doe"
                            />
                            <p className="text-sm text-muted-foreground">
                                This will generate the standard declaration text with your name in a handwritten font.
                            </p>
                        </div>

                        <Button onClick={generateDeclaration} className="w-full" size="lg">
                            Generate Declaration
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6 text-center">
                        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                            <img src={finalImage} alt="Declaration" className="w-full h-auto" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg font-medium text-green-600">Generated! ({fileSize})</p>
                            <div className="flex gap-4 justify-center">
                                <Button variant="outline" onClick={() => setFinalImage(null)}>
                                    <RefreshCw className="mr-2 h-4 w-4" /> Create New
                                </Button>
                                <Button onClick={downloadImage} className="bg-green-600 hover:bg-green-700">
                                    <Download className="mr-2 h-4 w-4" /> Download JPG
                                </Button>
                            </div>
                            <AffiliateLinks links={affiliateLinks} title="Declaration Generator" />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
