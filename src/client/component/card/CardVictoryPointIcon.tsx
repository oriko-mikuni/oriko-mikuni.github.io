import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import './styles/CardVictoryPoints.css';

function CardVictoryPointIcon(
    {victoryPoints}:
    {victoryPoints: VictoryPoints}
): React.JSX.Element {
    const classes: Array<string> = ['card-victory-point-icon'];
    let victoryPointNumber: string;

    switch (victoryPoints) {
        case 'negativeConditional':
            classes.push('card-victory-point-negative');
            classes.push('card-victory-point-conditional');
            victoryPointNumber = "-?";
            break;
        case 'variable':
            classes.push('card-victory-point-variable');
            victoryPointNumber = "*";
            break;
        case 'conditional':
            classes.push('card-victory-point-positive');
            classes.push('card-victory-point-conditional');
            victoryPointNumber = "?";
            break;
        default:
            classes.push(victoryPoints < 0 ? 'card-victory-point-negative' : 'card-victory-point-positive');
            classes.push('card-victory-point-number');
            victoryPointNumber = victoryPoints.toString();
    }

    return <div className={classes.join(' ')}>{victoryPointNumber}</div>;
}

export default CardVictoryPointIcon;
