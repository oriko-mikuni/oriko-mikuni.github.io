import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import React from "react";
import "./styles/CardStateIconDisplay.css"

function CardStateIconDisplay(
    {state, position}:
    {state?: CardStateIcon, position?: 'left' | 'right'}
): React.JSX.Element {
    if (position === undefined)
        return <div className={`card-state-icon card-state-icon-as-${state}`}/>;
    return <div className={`card-state-icon card-state-icon-as-${state} card-state-icon-${position}`}/>;
}

export default CardStateIconDisplay;
