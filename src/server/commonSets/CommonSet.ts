import {CardName} from "../../common/cards/CardName";

export enum CommonSetName {
    CLASSICS = "Classics",
    LEGENDS = "Legends",
    CLASSICS_UPDATED = "Classics (Updated)",
    LEGENDS_UPDATED = "Legends (Updated)",
    HORIZONS = "Horizons",
    INCLUDE_MIXED_PLACEHOLDER = "#includeMixed",
    TRADE_ROUTES = "Common Trade Routes",
    A_NEW_BEGINNING = "A New Beginning",
    RISE_OF_CIVILISATIONS = "Rise of Civilisations",
    CLASH_OF_LEGACIES = "Clash of Legacies",
    THE_GOLDEN_AGES = "The Golden Ages",
    WAY_OF_THE_CONQUEROR = "Way of the Conqueror"
}

export function getCommonSetName(name?: string): CommonSetName | undefined {
    if (name === undefined) return undefined;
    return Object.values(CommonSetName).find(value => value === name);
}

export type CommonSet = {
    setName: CommonSetName;
    includeHorizons: boolean;
    mixed?: boolean;

    fame: Array<CardName>;
    uncivilised: Array<CardName>;
    civilised: Array<CardName>;
    region: Array<CardName>;
    tributary: Array<CardName>;

    tradeRoute: Array<CardName>;

    threePlayerAdd: Array<CardName>;
    fourPlayerAdd: Array<CardName>;

    tradeRouteExpansionRemove: Array<CardName>;
    tradeRouteExpansionAdd: Array<CardName>;

    alternativeTributary: Array<[CardName, CardName]>;
}
