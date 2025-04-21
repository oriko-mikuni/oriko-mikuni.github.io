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
    let vpText: Array<React.JSX.Element> | null;
    let vpTextClasses: string = "card-victory-point-text";
    if (victoryPointString === undefined) {
        vpText = RenderCardText(undefined);
    } else {
        let translateResult: string = vpTextTranslate(victoryPointString);
        if (translateResult.endsWith("#wider")) {
            translateResult = translateResult.slice(0, translateResult.length - 6);
            vpTextClasses = vpTextClasses + " card-victory-point-text-wider";
        }
        vpText = RenderCardText(translateResult);
    }
    if (vp === 0 && vpText === null) {
        return null;
    }

    const victoryPointRender: React.JSX.Element = <CardVictoryPointIcon victoryPoints={vp}/>;

    return <>
        <div className="card-victory-point-icon-bottom-right">{victoryPointRender}</div>
        <div className={vpTextClasses}>{vpText}</div>
    </>;
}

export default CardVictoryPoints;
