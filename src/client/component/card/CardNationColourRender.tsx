import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import './styles/CardNationColour.css';
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";

export enum CardNationColourDisplayShape {
    TRIANGLE = "card-nation-colour-triangle",
    SQUARE = "card-nation-colour-inline-square"
}

export const CardNationColourShapeStyle: Readonly<Record<CardNationColourDisplayShape, Readonly<React.CSSProperties>>> = {
    [CardNationColourDisplayShape.TRIANGLE]: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "45px",
        height: "45px",
        backgroundSize: "45px 45px",
        clipPath: "polygon(0 0, 45px 45px, 0 45px)",
        overflow: "hidden",
        backgroundClip: "padding-box",
        borderBottomLeftRadius: "inherit"},
    [CardNationColourDisplayShape.SQUARE]: {
        display: "inline-block",
        width: "1em",
        height: "1em",
        backgroundSize: "1em"
    }
}

const CardLocationDisplayShape: Record<CardNationColourDisplayShape, string> = {
    [CardNationColourDisplayShape.TRIANGLE]: "card-triangle-location",
    [CardNationColourDisplayShape.SQUARE]: "card-inline-square-location",
}

const nationColourDisplayBackground: Record<CardNationColour, React.CSSProperties> = {
    Abbasids: {backgroundImage: `url("nation_color/ABB.png")`},
    Aksumites: {backgroundImage: `url("nation_color/AKS.png")`},
    Arthurians: {backgroundColor: "#8dbe22"},
    Atlanteans: {backgroundColor: "#64c7f3"},
    Carthaginians: {backgroundColor: "#005da3"},
    Celts: {backgroundColor: "#00683a"},
    Cultists: {backgroundImage: `url("nation_color/CUL.png")`},
    Egyptians: {backgroundColor: "#ffee00"},
    Greeks: {backgroundColor: "#ffffff"},
    Guptas: {backgroundImage: `url("nation_color/GUP.png")`},
    Inuit: {backgroundImage: `url("nation_color/INU.png")`},
    Japanese: {backgroundImage: `url("nation_color/JPN.png")`},
    Macedonians: {backgroundColor: "#552b81"},
    Magyars: {backgroundImage: `url("nation_color/MAG.png")`},
    Martians: {backgroundImage: `url("nation_color/MRT.png")`},
    Mauryans: {backgroundColor: "#9e622e"},
    Mayans: {backgroundImage: `url("nation_color/MAY.png")`},
    Minoans: {backgroundColor: "#000000"},
    Olmecs: {backgroundColor: "#8e8e8d"},
    Persians: {backgroundColor: "#a45396"},
    Polynesians: {backgroundImage: `url("nation_color/POL.png")`},
    Qin: {backgroundColor: "#ef82ac"},
    Romans: {backgroundColor: "#e30613"},
    Sassanids: {backgroundImage: `url("nation_color/SAS.png")`},
    Scythians: {backgroundColor: "#b7b867"},
    Taino: {backgroundImage: `url("nation_color/TAI.png")`},
    Tang: {backgroundImage: `url("nation_color/TAN.png")`},
    Utopians: {backgroundColor: "#12b1ad"},
    Vikings: {backgroundColor: "#f59e00"},
    Wagadou: {backgroundImage: `url("nation_color/WAG.png")`},
    common: {}
}

function CardNationColourRender({nationColour, location, shape, nationColourImageURL}: {
    nationColour?: CardNationColour,
    location: CardStartingLocation,
    shape: CardNationColourDisplayShape,
    nationColourImageURL?: string
}): React.JSX.Element | null {
    const color: string = nationColour ?? "common-black";

    let displayStyle: React.CSSProperties;
    if (nationColourImageURL)
        displayStyle = {backgroundImage: `url("${nationColourImageURL}")`};
    else if (nationColour !== undefined)
        displayStyle = {...nationColourDisplayBackground[nationColour]};
    else displayStyle = {};
    displayStyle = {...displayStyle, ...CardNationColourShapeStyle[shape]};

    const locationDisplayStyle: string = CardLocationDisplayShape[shape];
    return <div style={displayStyle}>
        {location === CardStartingLocation.DEFAULT ? null :
            <div className={`${locationDisplayStyle} card-nation-location-${color} card-location-${location}`}/>}
    </div>;
}

export default CardNationColourRender;
