
/**
 * Image Processing Library for SarkariPhoto.in
 * Handles compression, date stamping, and signature merging.
 */

// Helper to load an image
export const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};

export interface CompressionResult {
    blob: Blob;
    quality: number;
    sizeKB: number;
    warning?: string;
}

/**
 * Creates a canvas from the cropped area of an image.
 */
export async function getCroppedCanvas(
    imageSrc: string,
    pixelCrop: { x: number; y: number; width: number; height: number }
): Promise<HTMLCanvasElement> {
    const image = await loadImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('No 2d context');
    }

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    return canvas;
}

/**
 * Resizes a canvas to specific dimensions.
 */
export function resizeCanvas(
    canvas: HTMLCanvasElement,
    targetWidth: number,
    targetHeight: number
): HTMLCanvasElement {
    const newCanvas = document.createElement('canvas');
    newCanvas.width = targetWidth;
    newCanvas.height = targetHeight;
    const ctx = newCanvas.getContext('2d');

    if (!ctx) throw new Error('No 2d context');

    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(canvas, 0, 0, targetWidth, targetHeight);

    return newCanvas;
}

/**
 * Compresses a canvas to a target KB size using binary search.
 * @param canvas The source canvas
 * @param maxKB Target maximum size in KB
 * @returns Promise resolving to the best blob and metadata
 */
export async function compressToTargetKB(
    canvas: HTMLCanvasElement,
    maxKB: number
): Promise<CompressionResult> {
    let minQ = 0.01;
    let maxQ = 1.0;
    let bestBlob: Blob | null = null;
    let bestQuality = 1.0;

    const iterations = 8;

    for (let i = 0; i < iterations; i++) {
        const midQ = (minQ + maxQ) / 2;
        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/jpeg', midQ)
        );

        if (!blob) throw new Error("Canvas toBlob failed");

        const sizeKB = blob.size / 1024;

        if (sizeKB <= maxKB) {
            bestBlob = blob;
            bestQuality = midQ;
            minQ = midQ;
        } else {
            maxQ = midQ;
        }
    }

    if (!bestBlob) {
        const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve, 'image/jpeg', 0.01)
        );
        if (blob) {
            return {
                blob: blob,
                quality: 0.01,
                sizeKB: blob.size / 1024,
                warning: "Could not compress below target size even at lowest quality. Try cropping tighter."
            };
        }
    }

    if (bestBlob) {
        return {
            blob: bestBlob,
            quality: bestQuality,
            sizeKB: bestBlob.size / 1024
        };
    }

    throw new Error("Compression failed unexpectedly");
}

/* Alias for Prompt Requirement */
export const compressToTargetSize = compressToTargetKB;

/**
 * Adds a date strip to the bottom of the photo.
 * Modifies the canvas in place.
 */
export function addDateToPhoto(canvas: HTMLCanvasElement, dateString: string) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const stripHeight = height * 0.15;
    const yStart = height - stripHeight;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, yStart, width, stripHeight);

    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const fontSize = Math.floor(stripHeight * 0.6);
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;

    ctx.fillText(dateString, width / 2, yStart + (stripHeight / 2));
}

/* Alias for Prompt Requirement */
export const addDateStamp = (ctx: CanvasRenderingContext2D, width: number, height: number, dateText: string) => {
    // Determine canvas from context if possible, or just reimplement logic for context
    const stripHeight = height * 0.15;
    const yStart = height - stripHeight;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, yStart, width, stripHeight);

    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const fontSize = Math.floor(stripHeight * 0.6);
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;

    ctx.fillText(dateText, width / 2, yStart + (stripHeight / 2));
};

/**
 * Joins three signature images vertically.
 */
export async function joinSignatures(signatures: string[]): Promise<string> {
    const images = await Promise.all(signatures.map(loadImage));

    const canvasWidth = 350;
    const canvasHeight = 500;

    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error("Could not get canvas context");

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const padding = 20;
    const availableHeight = canvasHeight - (padding * 4);
    const slotHeight = availableHeight / 3;

    images.forEach((img, index) => {
        const scale = Math.min(
            (canvasWidth - 40) / img.width,
            slotHeight / img.height
        );

        const w = img.width * scale;
        const h = img.height * scale;

        const x = (canvasWidth - w) / 2;
        const y = padding + (index * (slotHeight + padding)) + (slotHeight - h) / 2;

        ctx.drawImage(img, x, y, w, h);
    });

    return canvas.toDataURL('image/jpeg', 0.9);
}

/**
 * Creates a Postcard (4x6 inch) from an image.
 */
export async function createPostcard(imageSrc: string): Promise<string> {
    const img = await loadImage(imageSrc);

    // 4x6 inch @ 300 DPI = 1200 x 1800 px
    const width = 1200;
    const height = 1800;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error("No context");

    // Fill White
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    // Margin logic (e.g. 50px)
    const margin = 50;
    const drawW = width - (margin * 2);
    const drawH = height - (margin * 2);

    const scale = Math.min(drawW / img.width, drawH / img.height);
    const w = img.width * scale;
    const h = img.height * scale;

    const x = (width - w) / 2;
    const y = (height - h) / 2;

    ctx.drawImage(img, x, y, w, h);

    // Convert to high quality JPG
    return canvas.toDataURL('image/jpeg', 0.95);
}
