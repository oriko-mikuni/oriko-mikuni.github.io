import {CardNationColour} from "../../../common/cards/CardNationColour.ts";
import './styles/CardNationColour.css';
import React from "react";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation.ts";

function CardNationColourTriangle(
    {nationColour, location}:
    {nationColour?: CardNationColour, location?: CardStartingLocation}
): React.JSX.Element | null {
    const color: string = nationColour ? nationColour : 'common';
    return <div className={`card-nation-colour-triangle card-nation-colour-${color}`}>
        {location
            ? <div
                className={`card-triangle-location card-nation-location-${color} card-triangle-location-${location}`}
            />
            : null}
    </div>;
}

export default CardNationColourTriangle;
