import {CardName} from "./CardName";

// card location, excluding garrison
export enum CardLocation {
    // your play area
    STATE = "playerLocation:state",
    NATION_POWER = "playerLocation:nation-power",
    IN_PLAY = "playerLocation:in-play",
    // your deck cycle
    DRAW_DECK = "playerLocation:draw-deck",
    DISCARD_PILE = "playerLocation:discard-pile",
    HAND = "playerLocation:hand",
    // your out of play area
    HISTORY = "playerLocation:history",
    SUNKEN = "playerLocation:sunken",
    LEGENDS = "playerLocation:legends",
    // not yet yours
    NATION_DECK = "playerLocation:nationDeck",
    ACCESSION = "playerLocation:accessionCard",
    DEVELOPMENT_AREA = "playerLocation:developmentArea",
    // public area
    MARKET_SLOT = "publicLocation:marketSlot",
    MAIN_DECK = "publicLocation:mainDeck",
    SMALL_DECK = "publicLocation:smallDeck",
    FAME_DECK = "publicLocation:fameDeck",
    UNREST_PILE = "publicLocation:unrestPile",
    CHAOS_PILE = "publicLocation:chaosPile",
    EXILE_AREA = "publicLocation:exilePile",
}

export type CardLocationOrGarrison = CardLocation | CardName;

export function isCardLocation(arg: CardLocationOrGarrison): arg is CardLocation {
    return arg.startsWith("playerLocation:") || arg.startsWith("publicLocation:");
}

export function isInPlayLocation(location: CardLocationOrGarrison): boolean {
    return location === CardLocation.IN_PLAY
        || location === CardLocation.STATE
        || location === CardLocation.NATION_POWER;
}
