import {CardSuitIcon} from "../../../common/cards/CardSuitIcon.ts";
import React from "react";
import "./styles/CardSuitIconDisplay.css";

function CardSuitIconDisplay(
    {suit, isLarge = false}:
    {suit?: CardSuitIcon, isLarge?: boolean}
): React.JSX.Element {
    if (isLarge) {
        return <div className={`card-suit-icon-large card-suit-icon-${suit}`}/>
    }
    return <div className={`card-suit-icon card-suit-icon-${suit}`}/>;
}

export default CardSuitIconDisplay;
