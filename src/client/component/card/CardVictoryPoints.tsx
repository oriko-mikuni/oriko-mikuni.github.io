import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import './styles/CardVictoryPoints.css';
import {RenderCardText} from "./CardText.tsx";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";
import {useTranslation} from "react-i18next";

function CardVictoryPoints(
    {victoryPoints, victoryPointString}:
    {victoryPoints?: VictoryPoints, victoryPointString?: string}
): React.JSX.Element | null {
    const vp : VictoryPoints = victoryPoints === undefined ? 0 : victoryPoints;
    const {t: vpTextTranslate} = useTranslation("victoryText");
    const vpText: Array<React.JSX.Element> | null = RenderCardText(
        victoryPointString === undefined ? undefined : vpTextTranslate(victoryPointString)
    );
    if (vp === 0 && vpText === null) {
        return null;
    }

    const victoryPointRender: React.JSX.Element = <CardVictoryPointIcon victoryPoints={vp}/>;

    return <>
        <div className="card-victory-point-icon-bottom-right">{victoryPointRender}</div>
        <div className={`card-victory-point-text`}>{vpText}</div>
    </>;
}

export default CardVictoryPoints;
