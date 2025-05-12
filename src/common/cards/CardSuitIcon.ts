import React from "react";

export enum CardSuitIcon {
    POWER = "power",
    FAME = "fame",
    UNCIVILISED = "uncivilised",
    CIVILISED = "civilised",
    REGION = "region",
    TRIBUTARY = "tributary",
    UNREST = "unrest",
    TRADE_ROUTE = "trade-route",
    GADGET = "gadget"
}

const suitCardTitleColours: Record<CardSuitIcon, React.CSSProperties> = {
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

const defaultSuitCardTitleColor: React.CSSProperties = {color: "white", backgroundColor: "#808080"};

export function getSuitCardTitleColour(suit?: CardSuitIcon): React.CSSProperties {
    if (suit === undefined) return defaultSuitCardTitleColor;
    return suitCardTitleColours[suit] ?? defaultSuitCardTitleColor;
}
