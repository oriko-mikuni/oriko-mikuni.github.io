import React from "react";
import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import {getNationColourFile} from "../../cards/NationColourImageManifest.ts";

function CardNationColourCustomImage({file, nationColour}: {
    file?: File,
    nationColour?: CardNationColour
}): React.JSX.Element {
    const canvasRef: React.RefObject<HTMLCanvasElement | null> =
        React.useRef<HTMLCanvasElement>(null);
    const size: number = 45;

    React.useEffect((): void => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (!ctx) return;

        const img: HTMLImageElement = new Image();
        img.onload = (): void => {
            const patternCanvas: HTMLCanvasElement = document.createElement("canvas");
            patternCanvas.width = size;
            patternCanvas.height = size;

            const patternCtx: CanvasRenderingContext2D | null = patternCanvas.getContext("2d");
            if (!patternCtx) return;

            patternCtx.clearRect(0, 0, size, size);
            patternCtx.drawImage(img, 0, 0, size, size);

            const pattern: CanvasPattern | null = ctx.createPattern(patternCanvas, 'no-repeat');
            if (!pattern) return;

            ctx.clearRect(0, 0, size, size);
            ctx.save();

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size, size);
            ctx.lineTo(0, size);
            ctx.closePath();

            ctx.fillStyle = pattern;
            ctx.fill();
            ctx.restore();
        }

        if (file !== undefined) {
            const reader = new FileReader();
            reader.onload = (): void => {
                img.src = reader.result as string;
            }
            reader.readAsDataURL(file);
        } else {
            img.src = getNationColourFile(nationColour) as string;
        }
    });

    return <canvas ref={canvasRef} width={45} height={45}/>;
}

export default CardNationColourCustomImage;
