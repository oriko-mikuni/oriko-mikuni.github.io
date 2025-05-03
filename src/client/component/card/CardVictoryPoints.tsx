import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import './styles/CardVictoryPoints.css';
import CardTextRender from "./CardTextRender.tsx";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";
import {useTranslation} from "react-i18next";

function CardVictoryPoints(
    {victoryPoints, victoryPointString, diy = false}:
    {victoryPoints: VictoryPoints, victoryPointString?: string, diy?: boolean}
): React.JSX.Element | null {
    const {t: vpTextTranslate} = useTranslation("victoryText");
    let vpText: React.JSX.Element | null;
    let vpTextClasses: string = "card-victory-point-text";
    if (victoryPointString === undefined) {
        vpText = null;
    } else {
        let translateResult: string = diy ? victoryPointString : vpTextTranslate(victoryPointString);
        if (translateResult.endsWith("#wider")) {
            translateResult = translateResult.slice(0, translateResult.length - 6);
            vpTextClasses = vpTextClasses + " card-victory-point-text-wider";
        }
        vpText = <CardTextRender text={translateResult}/>;
    }
    if (victoryPoints === 0 && vpText === null) {
        return null;
    }

    const victoryPointRender: React.JSX.Element = <CardVictoryPointIcon victoryPoints={victoryPoints}/>;

    return <>
        <div className="card-victory-point-icon-bottom-right">{victoryPointRender}</div>
        <div className={vpTextClasses}>{vpText}</div>
    </>;
}

export default CardVictoryPoints;
