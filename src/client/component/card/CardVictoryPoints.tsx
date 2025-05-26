import {VictoryPoints} from "../../../common/cards/ClientCard.ts";
import React from "react";
import CardTextRender from "./CardTextRender.tsx";
import CardVictoryPointIcon from "./CardVictoryPointIcon.tsx";
import {useTranslation} from "react-i18next";

const cardVictoryPointText: string = "absolute text-[8px] leading-[11px] bg-[#00000080] text-white text-center right-[30px] bottom-[5px] w-[60px]";
const cardVictoryPointWiderText: string = "absolute text-[8px] leading-[11px] bg-[#00000080] text-white text-center right-[30px] bottom-[5px] w-[65px]";

function CardVictoryPoints(
    {victoryPoints, victoryPointString, diy = false}:
    {victoryPoints: VictoryPoints, victoryPointString?: string, diy?: boolean}
): React.JSX.Element | null {
    const {t: vpTextTranslate} = useTranslation("victoryText");
    let vpText: React.JSX.Element | null;
    let vpTextClasses: string;
    if (victoryPointString === undefined) {
        vpText = null;
        vpTextClasses = "";
    } else {
        let translateResult: string = diy ? victoryPointString : vpTextTranslate(victoryPointString);
        if (translateResult.endsWith("^")) {
            translateResult = translateResult.slice(0, translateResult.length - 1);
            vpTextClasses = cardVictoryPointWiderText;
        } else
            vpTextClasses = cardVictoryPointText;
        vpText = <CardTextRender text={translateResult}/>;
    }
    if (victoryPoints === 0 && vpText === null) {
        return null;
    }

    const victoryPointRender: React.JSX.Element = <CardVictoryPointIcon victoryPoints={victoryPoints}/>;

    return <>
        <div className="absolute bottom-[5px] right-[5px]">{victoryPointRender}</div>
        <div className={vpTextClasses}>{vpText}</div>
    </>;
}

export default CardVictoryPoints;
