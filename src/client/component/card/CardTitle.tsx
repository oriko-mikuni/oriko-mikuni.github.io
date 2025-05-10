import React from 'react';
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import './styles/CardTitle.css';
import {CardName} from "../../../common/cards/CardName.ts";
import {useTranslation} from "react-i18next";
import CardTextRender from "./CardTextRender.tsx";

const stateCardTitleColours: Record<string, React.CSSProperties> = {
    // standard state
    [CardName.BARBARIAN0]: {color: "white", backgroundColor: "#b21e1c"},
    [CardName.EMPIRE0]: {color: "white", backgroundColor: "#5082b5"},
    [CardName.BARBARIAN1]: {color: "white", backgroundColor: "#b21e1c"},
    [CardName.EMPIRE1]: {color: "white", backgroundColor: "#5082b5"},
    [CardName.BARBARIAN2]: {color: "white", backgroundColor: "#b21e1c"},
    [CardName.EMPIRE2]: {color: "white", backgroundColor: "#5082b5"},
    [CardName.BARBARIAN3]: {color: "white", backgroundColor: "#b21e1c"},
    [CardName.EMPIRE3]: {color: "white", backgroundColor: "#5082b5"},

    // Taino
    [CardName.FREE_TRIBES]: {color: "white", backgroundColor: "#b21e1c"},
    [CardName.FREE_TRIBES_F]: {color: "white", backgroundColor: "#b21e1c"},

    // Inuit
    [CardName.SUMMER_INU]: {color: "white", backgroundColor: "#d9cf89"},
    [CardName.WINTER_INU]: {color: "white", backgroundColor: "#91c6e8"},

    // Martians
    [CardName.ALIEN]: {color: "white", backgroundColor: "#5082b5"},
    [CardName.GONE_NATIVE]: {color: "white", backgroundColor: "#b21e1c"},

    // Polynesians
    [CardName.ISLE_BOUND]: {color: "white", backgroundColor: "#e6b12d"},
    [CardName.VOYAGING]: {color: "white", backgroundColor: "#294a59"},

    // Cultists
    [CardName.CORRUPTED_CUL]: {color: "white", backgroundColor: "#973335"},
    [CardName.SUMMONED_CUL]: {color: "white", backgroundColor: "#48354b"}
};

const suitCardTitleColors: Record<CardSuitIcon, React.CSSProperties> = {
    [CardSuitIcon.POWER]: {color: "white", backgroundColor: "#020202"},
    [CardSuitIcon.FAME]: {color: "white", backgroundColor: "#ac4b97"},
    [CardSuitIcon.UNCIVILISED]: {color: "white", backgroundColor: "#52b030"},
    [CardSuitIcon.CIVILISED]: {color: "black", backgroundColor: "#cecdcc"},
    [CardSuitIcon.REGION]: {color: "white", backgroundColor: "#fbb90e"},
    [CardSuitIcon.TRIBUTARY]: {color: "white", backgroundColor: "#324e9d"},
    [CardSuitIcon.UNREST]: {color: "white", backgroundColor: "#c81617"},
    [CardSuitIcon.TRADE_ROUTE]: {color: "white", backgroundColor: "#954726"},
    [CardSuitIcon.GADGET]: {color: "white", backgroundColor: "#f18fbb"},
};

const defaultTitleColor: React.CSSProperties = {color: "white", backgroundColor: "#808080"};

function getCardTitleDisplay(title: string): string {
    return title.toUpperCase();
}

function CardTitle(
    {title, banner = undefined, diy = false, isState, exhaustCount}:
    {title: string, banner?: CardSuitIcon, diy?: boolean, isState: boolean, exhaustCount?: number}
): React.JSX.Element {
    const {t: titleTranslation} = useTranslation("cardName");

    const titleDisplay: string = getCardTitleDisplay(diy ? title : titleTranslation(title));
    const titleColor: React.CSSProperties = isState
        ? (stateCardTitleColours[title] !== undefined ? stateCardTitleColours[title] : defaultTitleColor)
        : (banner !== undefined ? suitCardTitleColors[banner] : defaultTitleColor);
    const specialExhaustCount: React.JSX.Element | null =
        exhaustCount === undefined ? null :
            <div className="special-exhaust-count text-bold">
                <CardTextRender text={exhaustCount + "{exhaust}"}/>
            </div>

    const className: string = titleDisplay.length >= 25 ? "card-title card-title-long card-title-super-long" :
        titleDisplay.length > 20 ? "card-title card-title-long" : "card-title";
    return <div className={className}>
        <div style={titleColor}>{titleDisplay}</div>
        {specialExhaustCount}
    </div> ;
}

export default CardTitle;
