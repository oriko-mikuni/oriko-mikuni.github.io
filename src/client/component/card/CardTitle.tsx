import React from 'react';
import {CardSuitIcon, getSuitCardTitleColour} from "../../../common/cards/CardSuitIcon";
import './styles/CardTitle.css';
import {getCustomCardTitleColour} from "../../../common/cards/CardName.ts";
import {useTranslation} from "react-i18next";
import CardTextRender from "./CardTextRender.tsx";

function getCardTitleDisplay(title: string): string {
    return title.toUpperCase();
}

function CardTitle(
    {title, banner = undefined, diy = false, exhaustCount}:
    {title: string, banner?: CardSuitIcon, diy?: boolean, exhaustCount?: number}
): React.JSX.Element {
    const {t: titleTranslation} = useTranslation("cardName");

    const titleDisplay: string = getCardTitleDisplay(diy ? title : titleTranslation(title));
    const titleColour: React.CSSProperties = getCustomCardTitleColour(title) || getSuitCardTitleColour(banner);
    const specialExhaustCount: React.JSX.Element | null =
        exhaustCount === undefined ? null :
            <div className="card-title-special-exhaust-count text-bold">
                <CardTextRender text={exhaustCount + "{exhaust}"}/>
            </div>

    const className: string = titleDisplay.length >= 25 ? "card-title card-title-long card-title-super-long" :
        titleDisplay.length > 20 ? "card-title card-title-long" : "card-title";
    return <div className={className}>
        <div style={titleColour}>{titleDisplay}</div>
        {specialExhaustCount}
    </div> ;
}

export default CardTitle;
