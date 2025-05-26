import {CardName} from "../../common/cards/CardName";

export enum CommonSetName {
    CLASSICS = "Classics",
    LEGENDS = "Legends",
    CLASSICS_UPDATED = "Classics (Updated)",
    LEGENDS_UPDATED = "Legends (Updated)",
    HORIZONS = "Horizons"
}

export function getCommonSetName(name?: string): CommonSetName | undefined {
    if (name === undefined) return undefined;
    return Object.values(CommonSetName).find(value => value === name);
}

export type CommonSet = {
    setName: CommonSetName;

    fame: Array<CardName>;
    uncivilised: Array<CardName>;
    civilised: Array<CardName>;
    region: Array<CardName>;
    tributary: Array<CardName>;

    threePlayerAdd: Array<CardName>;
    fourPlayerAdd: Array<CardName>;

    tradeRouteExpansionRemove: Array<CardName>;
    tradeRouteExpansionAdd: Array<CardName>;

    alternativeTributary: Array<[CardName, CardName]>;
}
