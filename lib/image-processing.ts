export const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = url
    })

export function getRadianAngle(degreeValue: number) {
    return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
    const rotRad = getRadianAngle(rotation)

    return {
        width:
            Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height:
            Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export async function getCroppedImg(
    imageSrc: string,
    pixelCrop: { x: number; y: number; width: number; height: number },
    rotation = 0,
    flip = { horizontal: false, vertical: false },
    outputWidth?: number,
    outputHeight?: number,
    addDateStr?: string,
    quality = 0.9
): Promise<string> {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
        return ''
    }

    const rotRad = getRadianAngle(rotation)

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
        image.width,
        image.height,
        rotation
    )

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth
    canvas.height = bBoxHeight

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
    ctx.rotate(rotRad)
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
    ctx.translate(-image.width / 2, -image.height / 2)

    // draw rotated image
    ctx.drawImage(image, 0, 0)

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height
    )

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // paste generated rotate image creating the top left corner at 0, 0
    ctx.putImageData(data, 0, 0)

    // If resize is requested
    if (outputWidth && outputHeight) {
        const resizeCanvas = document.createElement('canvas')
        resizeCanvas.width = outputWidth
        resizeCanvas.height = outputHeight
        const resizeCtx = resizeCanvas.getContext('2d')
        if (resizeCtx) {
            // high quality resize
            resizeCtx.imageSmoothingEnabled = true;
            resizeCtx.imageSmoothingQuality = 'high';
            resizeCtx.drawImage(canvas, 0, 0, outputWidth, outputHeight)

            // Add Date if requested
            if (addDateStr) {
                const stripHeight = outputHeight * 0.15; // 15% height for date strip
                // Draw white strip
                resizeCtx.fillStyle = 'white';
                resizeCtx.fillRect(0, outputHeight - stripHeight, outputWidth, stripHeight);

                // Draw text
                resizeCtx.fillStyle = 'black';
                resizeCtx.textAlign = 'center';
                resizeCtx.textBaseline = 'middle';
                // Font size based on strip height
                const fontSize = stripHeight * 0.6;
                resizeCtx.font = `bold ${fontSize}px Arial`;
                resizeCtx.fillText(addDateStr, outputWidth / 2, outputHeight - (stripHeight / 2));
            }

            return resizeCanvas.toDataURL('image/jpeg', quality)
        }
    }

    // As Base64 string
    return canvas.toDataURL('image/jpeg', quality)
}

export async function joinSignatures(imageSrc: string): Promise<string> {
    const image = await createImage(imageSrc);

    const canvas = document.createElement('canvas');
    const width = 350;
    const height = 500;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // Fill white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    const padding = 20;
    const sigHeight = (height - (2 * padding)) / 3;

    // Draw 3 times
    ctx.drawImage(image, 0, 0, width, sigHeight);
    ctx.drawImage(image, 0, sigHeight + padding, width, sigHeight);
    ctx.drawImage(image, 0, (sigHeight + padding) * 2, width, sigHeight);

    return canvas.toDataURL('image/jpeg', 0.9);
}
