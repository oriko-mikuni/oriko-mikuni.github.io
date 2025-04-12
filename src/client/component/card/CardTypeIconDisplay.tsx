import {CardTypeIcon} from "../../../common/cards/CardTypeIcon.ts";
import React from "react";
import "./styles/CardTypeIconDisplay.css";

function CardTypeIconDisplay(
    {type}:
    {type?: CardTypeIcon}
): React.JSX.Element {
    return <div className={`card-type-icon card-type-icon-${type}`}/>;
}

export default CardTypeIconDisplay;
