import {
    CardNationColour,
    getNationColourStyle,
    getNationTextColour
} from "../../../common/cards/CardNationColour.ts";
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import CardNationColourCustomImage from "./CardNationColourCustomImage.tsx";
import {getNationBgColour, getNationBgColourFile} from "../../icons/ClientNationColourManifest.ts";

export enum CardNationColourDisplayShape {
    TRIANGLE = "card-nation-colour-triangle",
    INLINE_SQUARE = "card-nation-colour-inline-square",
    MINIMAL_SQUARE = "card-nation-colour-minimal-square"
}

const CardNationColourShapeContainerStyle: Record<CardNationColourDisplayShape, string> = {
    [CardNationColourDisplayShape.TRIANGLE]: "absolute bottom-0 left-0 w-[45px] h-[45px] overflow-hidden bg-clip-padding rounded-bl-[inherit] text-transparent",
    [CardNationColourDisplayShape.INLINE_SQUARE]: "relative inline-block w-[1em] h-[1em] bg-cover text-transparent align-sub",
    [CardNationColourDisplayShape.MINIMAL_SQUARE]: "relative inline-block w-[1em] h-[1em] bg-cover text-transparent align-text-top",
};

const CardLocationDisplayShape: Record<CardNationColourDisplayShape, string> = {
    [CardNationColourDisplayShape.TRIANGLE]: "absolute bottom-[8px] left-[8px] w-[15px] h-[15px] bg-cover bg-card-location-",
    [CardNationColourDisplayShape.INLINE_SQUARE]: "absolute w-[1em] h-[1em] bg-cover bg-card-location-",
    [CardNationColourDisplayShape.MINIMAL_SQUARE]: "absolute w-[1em] h-[1em] bg-cover bg-card-location-",
}

function CardNationColourRender
({
    nationColour,
    location,
    shape,
    nationColourImageFile,
    diy = false
}: {
    nationColour?: CardNationColour,
    location: CardStartingLocation,
    shape: CardNationColourDisplayShape,
    nationColourImageFile?: File,
    diy?: boolean
}): React.JSX.Element | null {
    const displayBackgroundString: string = getNationColourStyle(nationColour);
    const locationColour: string = getNationTextColour(nationColour);
    let containerShapeStyle: string = CardNationColourShapeContainerStyle[shape];

    let displayNationColourElement: React.JSX.Element;

    if (shape === CardNationColourDisplayShape.TRIANGLE) {
        if (diy) {
            const blob: Blob | null = nationColourImageFile ?? getNationBgColourFile(nationColour);
            displayNationColourElement = blob !== null ? <CardNationColourCustomImage file={blob}/> :
                <svg width={45} height={45} fill={getNationBgColour(nationColour)}><polygon points="0,0 45,45 0,45"/></svg>;
        } else {
            displayNationColourElement = <div className={displayBackgroundString + " w-[45px] h-[45px] bg-cover clip-border-bl-triangle"}/>;
        }
    } else {
        displayNationColourElement = <div className={displayBackgroundString + " w-[1em] h-[1em] bg-cover absolute"}/>;
        if (!(nationColour === undefined || nationColour === CardNationColour.COMMON_B || nationColour === CardNationColour.COMMON)) {
            containerShapeStyle = containerShapeStyle + " border border-white border-solid";
        }
    }

    const displayStartingLocationElement: React.JSX.Element | null =
        location === CardStartingLocation.DEFAULT ? null :
            <div className={`${CardLocationDisplayShape[shape]}${location}${locationColour === "white" ? "" : "-" + locationColour}`}/>;

    return <div className={containerShapeStyle}>
        {displayNationColourElement}
        {displayStartingLocationElement}
    </div>;
}

export default CardNationColourRender;
