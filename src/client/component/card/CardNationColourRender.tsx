import {
    CardNationColour,
    getNationBackgroundStyle,
    getNationTextColour
} from "../../../common/cards/CardNationColour.ts";
import './styles/CardNationColour.css';
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";
import CardNationColourCustomImage from "./CardNationColourCustomImage.tsx";
import {getNationColourFile} from "../../cards/NationColourImageManifest.ts";

export enum CardNationColourDisplayShape {
    TRIANGLE = "card-nation-colour-triangle",
    SQUARE = "card-nation-colour-inline-square"
}

const CardNationColourShapeContainerStyle: Readonly<Record<CardNationColourDisplayShape, Readonly<React.CSSProperties>>> = {
    [CardNationColourDisplayShape.TRIANGLE]: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "45px",
        height: "45px",
        overflow: "hidden",
        backgroundClip: "padding-box",
        borderBottomLeftRadius: "inherit"},
    [CardNationColourDisplayShape.SQUARE]: {
        position: "relative",
        display: "inline-block",
        width: "1em",
        height: "1em",
        backgroundSize: "1em",
        verticalAlign: "middle",
        borderColor: "white",
        borderWidth: "1px",
        borderStyle: "solid",
    }
}

const CardLocationDisplayShape: Record<CardNationColourDisplayShape, string> = {
    [CardNationColourDisplayShape.TRIANGLE]: "card-triangle-location",
    [CardNationColourDisplayShape.SQUARE]: "card-inline-square-location",
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
    const displayBackground: React.CSSProperties = getNationBackgroundStyle(nationColour);
    const locationColour: string = getNationTextColour(nationColour);
    const containerShapeStyle: React.CSSProperties = {...CardNationColourShapeContainerStyle[shape]};

    let displayNationColourElement: React.JSX.Element;

    if (shape === CardNationColourDisplayShape.TRIANGLE) {
        if (diy) {
            const blob: Blob | null = nationColourImageFile ?? getNationColourFile(nationColour);
            displayNationColourElement = blob !== null
                ? <CardNationColourCustomImage file={blob}/>
                : <svg width={45} height={45}><polygon points="0,0 45,45 0,45" fill={displayBackground.backgroundColor ?? "#00000000"}/></svg>;
        } else {
            displayNationColourElement = <div style={{
                ...displayBackground,
                width: "45px",
                height: "45px",
                backgroundSize: "45px 45px",
                clipPath: "polygon(0 0, 45px 45px, 0 45px)",
            }}/>
        }
    } else {
        displayNationColourElement = <div style={{
            ...displayBackground,
            width: "1em",
            height: "1em",
            backgroundSize: "1em",
            position: "absolute",
        }}/>;
        if (nationColour === undefined || nationColour === CardNationColour.COMMON_B || nationColour === CardNationColour.COMMON) {
            containerShapeStyle.borderWidth = undefined;
            containerShapeStyle.borderColor = undefined;
            containerShapeStyle.borderStyle = undefined;
        }
    }

    const locationDisplayStyleClass: string = CardLocationDisplayShape[shape];

    const displayStartingLocationElement: React.JSX.Element | null =
        location === CardStartingLocation.DEFAULT ? null :
            <div className={`${locationDisplayStyleClass} card-location-${locationColour} card-location-${location}`}/>;

    return <div style={containerShapeStyle}>
        {displayNationColourElement}
        {displayStartingLocationElement}
    </div>;
}

export default CardNationColourRender;
