import React from "react";

const nationColourSize: number = 45;

function CardNationColourCustomImage(
    {file}:
    {file: Blob}
): React.JSX.Element {
    const canvasRef: React.RefObject<HTMLCanvasElement | null> =
        React.useRef<HTMLCanvasElement>(null);

    React.useEffect((): void => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (!ctx) return;

        const img: HTMLImageElement = new Image();
        img.onload = (): void => {
            const patternCanvas: HTMLCanvasElement = document.createElement("canvas");
            patternCanvas.width = nationColourSize;
            patternCanvas.height = nationColourSize;

            const patternCtx: CanvasRenderingContext2D | null = patternCanvas.getContext("2d");
            if (!patternCtx) return;

            patternCtx.clearRect(0, 0, nationColourSize, nationColourSize);
            patternCtx.drawImage(img, 0, 0, nationColourSize, nationColourSize);

            const pattern: CanvasPattern | null = ctx.createPattern(patternCanvas, 'no-repeat');
            if (!pattern) return;

            ctx.clearRect(0, 0, nationColourSize, nationColourSize);
            ctx.save();

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(nationColourSize, nationColourSize);
            ctx.lineTo(0, nationColourSize);
            ctx.closePath();

            ctx.fillStyle = pattern;
            ctx.fill();
            ctx.restore();
        }

        const reader = new FileReader();
        reader.onload = (): void => {
            img.src = reader.result as string;
        }
        reader.readAsDataURL(file);
    });

    return <canvas ref={canvasRef} width={45} height={45}/>;
}

export default CardNationColourCustomImage;
