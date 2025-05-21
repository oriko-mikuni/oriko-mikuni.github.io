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

const suitCardTitleColours: Record<CardSuitIcon, string> = {
    [CardSuitIcon.POWER]: "text-white bg-[#020202]",
    [CardSuitIcon.FAME]: "text-white bg-[#ac4b97]",
    [CardSuitIcon.UNCIVILISED]: "text-white bg-[#52b030]",
    [CardSuitIcon.CIVILISED]: "text-black bg-[#cecdcc]",
    [CardSuitIcon.REGION]: "text-white bg-[#fbb90e]",
    [CardSuitIcon.TRIBUTARY]: "text-white bg-[#324e9d]",
    [CardSuitIcon.UNREST]: "text-white bg-[#c81617]",
    [CardSuitIcon.TRADE_ROUTE]: "text-white bg-[#954726]",
    [CardSuitIcon.GADGET]: "text-white bg-[#f18fbb]",
};

const defaultSuitCardTitleColor: string = "text-white bg-[#808080]";

export function getSuitCardTitleColour(suit?: CardSuitIcon): string {
    if (suit === undefined) return defaultSuitCardTitleColor;
    return suitCardTitleColours[suit] ?? defaultSuitCardTitleColor;
}
