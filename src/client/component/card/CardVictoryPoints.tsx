import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import './styles/CardVictoryPoints.css';
import {RenderCardText} from "./CardText.tsx";

function CardVictoryPoints(
    {victoryPoints, victoryPointString}:
    {victoryPoints?: VictoryPoints, victoryPointString?: string}
): React.JSX.Element | null {
    const vp : VictoryPoints = victoryPoints === undefined ? 0 : victoryPoints;
    const vpText: Array<React.JSX.Element> | null = RenderCardText(victoryPointString);
    if (vp === 0 && vpText === null) {
        return null;
    }

    const classes: Array<string> = ['card-victory-point'];
    let victoryPointNumber: string;

    switch (vp) {
        case 'negativeConditional':
            classes.push('card-victory-point-negative');
            classes.push('card-victory-point-conditional');
            victoryPointNumber = "-?";
            break;
        case 'variable':
            classes.push('card-victory-point-variable');
            victoryPointNumber = "";
            break;
        case 'conditional':
            classes.push('card-victory-point-positive');
            classes.push('card-victory-point-conditional');
            victoryPointNumber = "?";
            break;
        default:
            classes.push(vp < 0 ? 'card-victory-point-negative' : 'card-victory-point-positive');
            classes.push('card-victory-point-number');
            victoryPointNumber = vp.toString();
    }

    return <div>
        <div className={classes.join(' ')}>{victoryPointNumber}</div>
        <div className={`card-victory-point-text`}>{vpText}</div>
    </div>;
}

export default CardVictoryPoints;
