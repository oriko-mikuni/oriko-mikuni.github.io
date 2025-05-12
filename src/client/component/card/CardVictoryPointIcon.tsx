import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import './styles/CardVictoryPoints.css';

function CardVictoryPointIcon(
    {victoryPoints, size = "25px"}:
    {victoryPoints: VictoryPoints, size?: string}
): React.JSX.Element {
    const classes: Array<string> = ['card-victory-point-icon'];
    let victoryPointNumber: string;

    switch (victoryPoints) {
        case 'negativeConditional':
            classes.push('card-victory-point-negative');
            victoryPointNumber = "-?";
            break;
        case 'variable':
            classes.push('card-victory-point-variable');
            victoryPointNumber = "*";
            break;
        case 'conditional':
            classes.push('card-victory-point-positive');
            victoryPointNumber = "?";
            break;
        default:
            classes.push(victoryPoints < 0 ? 'card-victory-point-negative' : 'card-victory-point-positive');
            victoryPointNumber = victoryPoints.toString();
    }

    const style: React.CSSProperties & Record<string, string> = {
        "--size": size
    }

    return <div className={classes.join(' ')} style={style}>
        {victoryPointNumber}
    </div>;
}

export default CardVictoryPointIcon;
