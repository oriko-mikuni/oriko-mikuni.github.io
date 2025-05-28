import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";

const cardVPPositive: string = "bg-card-vp-positive text-black";
const cardVPNegative: string = "bg-card-vp-negative text-[#ff0000]";
const cardVPVariable: string = "bg-card-vp-variable text-transparent";

function CardVictoryPointIcon(
    {victoryPoints, size = "25px"}:
    {victoryPoints: VictoryPoints, size?: string}
): React.JSX.Element {
    let classes: string;
    let victoryPointNumber: string;

    switch (victoryPoints) {
        case 'negativeConditional':
            classes = cardVPNegative;
            victoryPointNumber = "-?";
            break;
        case 'variable':
            classes = cardVPVariable;
            victoryPointNumber = "*";
            break;
        case 'conditional':
            classes = cardVPPositive;
            victoryPointNumber = "?";
            break;
        default:
            classes = victoryPoints < 0 ? cardVPNegative : cardVPPositive;
            victoryPointNumber = victoryPoints.toString();
    }

    const sizeVar: React.CSSProperties & Record<string, string> = {"--size": size};

    return <div
        className={`inline-grid size-[var(--size)] text-[calc(var(--size)*0.8)] leading-[var(--size)] text-center bg-cover ${classes}`}
        style={sizeVar}
    >
        {victoryPointNumber}
    </div>;
}

export default CardVictoryPointIcon;
