import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import './styles/CardNationColour.css';
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";

export enum CardNationColourStyle {
    TRIANGLE,
    SQUARE
}

function CardNationColourRender(
    {nationColour, location, style}:
    {nationColour?: CardNationColour, location?: CardStartingLocation, style: CardNationColourStyle}
): React.JSX.Element | null {
    const color: string = nationColour ? nationColour : 'common';
    switch (style) {
        case CardNationColourStyle.TRIANGLE:
            return <div className={`card-nation-colour-triangle card-nation-colour-${color}`}>
                {location
                    ? <div
                        className={`card-triangle-location card-nation-location-${color} card-triangle-location-${location}`}
                    />
                    : null}
            </div>;
        case CardNationColourStyle.SQUARE:
            return <div className={`card-nation-colour-inline-square card-nation-colour-${color}`}/>;
    }
}

export default CardNationColourRender;
