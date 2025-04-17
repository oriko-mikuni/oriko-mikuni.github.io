import React from 'react';
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import './styles/CardTitle.css';
import {CardName} from "../../../common/cards/CardName.ts";
import {useTranslation} from "react-i18next";

const stateCardTitleColors: Record<string, React.CSSProperties> = {
    // standard state
    [CardName.BARBARIAN0]: {color: "white", background: "#b21e1c"},
    [CardName.EMPIRE0]: {color: "white", background: "#5082b5"},
    [CardName.BARBARIAN1]: {color: "white", background: "#b21e1c"},
    [CardName.EMPIRE1]: {color: "white", background: "#5082b5"},
    [CardName.BARBARIAN2]: {color: "white", background: "#b21e1c"},
    [CardName.EMPIRE2]: {color: "white", background: "#5082b5"},
    [CardName.BARBARIAN3]: {color: "white", background: "#b21e1c"},
    [CardName.EMPIRE3]: {color: "white", background: "#5082b5"},

    // Taino
    [CardName.FREE_TRIBES]: {color: "white", background: "#b21e1c"},
    [CardName.FREE_TRIBES_F]: {color: "white", background: "#b21e1c"},

    // Inuit
    [CardName.SUMMER_INU]: {color: "white", background: "#d9cf89"},
    [CardName.WINTER_INU]: {color: "white", background: "#91c6e8"},

    // Martians
    [CardName.ALIEN]: {color: "white", background: "#5082b5"},
    [CardName.GONE_NATIVE]: {color: "white", background: "#b21e1c"},

    // Polynesians
    [CardName.ISLE_BOUND]: {color: "white", background: "#e6b12d"},
    [CardName.VOYAGING]: {color: "white", background: "#294a59"},

    // Cultists
    [CardName.CORRUPTED_CUL]: {color: "white", background: "#973335"},
    [CardName.SUMMONED_CUL]: {color: "white", background: "#48354b"}
};

const suitCardTitleColors: Record<CardSuitIcon, React.CSSProperties> = {
    [CardSuitIcon.POWER]: {color: "white", background: "#020202"},
    [CardSuitIcon.FAME]: {color: "white", background: "#ac4b97"},
    [CardSuitIcon.UNCIVILISED]: {color: "white", background: "#52b030"},
    [CardSuitIcon.CIVILISED]: {color: "black", background: "#cecdcc"},
    [CardSuitIcon.REGION]: {color: "white", background: "#fbb90e"},
    [CardSuitIcon.TRIBUTARY]: {color: "white", background: "#324e9d"},
    [CardSuitIcon.UNREST]: {color: "white", background: "#c81617"},
    [CardSuitIcon.TRADE_ROUTE]: {color: "white", background: "#954726"},
    [CardSuitIcon.GADGET]: {color: "white", background: "#f18fbb"},
};

const defaultTitleColor: React.CSSProperties = {color: "white", background: "#808080"};

function getCardTitleDisplay(title: string): string {
    return title.toUpperCase();
}

function CardTitle(
    {title, banner = undefined}:
    {title: string, banner?: CardSuitIcon}
): React.JSX.Element {
    const {t: titleTranslation} = useTranslation("cardName");

    const titleDisplay: string = getCardTitleDisplay(titleTranslation(title));
    const titleColor: React.CSSProperties =
        stateCardTitleColors[title] !== undefined ? stateCardTitleColors[title] :
            banner !== undefined ? suitCardTitleColors[banner] : defaultTitleColor;

    return <div className={`card-title${titleDisplay.length > 20 ? " card-title-long" : ""}`}>
        <div style={titleColor}>
            {titleDisplay}
        </div>
    </div> ;
}

export default CardTitle;
