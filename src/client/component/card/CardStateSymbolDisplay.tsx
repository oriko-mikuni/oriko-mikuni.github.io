import {CardStateIcon} from "../../../common/cards/CardStateIcon.ts";
import React from "react";
import "./styles/CardStateSymbolDisplay.css"

function CardStateSymbolDisplay(
    {state, position}:
    {state?: CardStateIcon, position?: 'left' | 'right'}
): React.JSX.Element {
    if (position === undefined)
        return <div className={`card-state-symbol card-state-symbol-as-${state}`}/>;
    return <div className={`card-state-symbol card-state-symbol-as-${state} card-state-symbol-${position}`}/>;
}

export default CardStateSymbolDisplay;
