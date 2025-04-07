import {CardSuitIcon} from "../common/cards/CardSuitIcon";
import {ICard} from "./cards/ICard";
import {CardName} from "../common/cards/CardName";

export enum Location {
    STATE = "location:state",
    IN_PLAY = "location:in-play",
    GARRISON = "location:garrison",
    DRAW_DECK = "location:draw-deck",
    DISCARD_PILE = "location:discard-pile",
    HAND = "location:hand",
    HISTORY = "location:history",
    SUNKEN = "location:sunken",
    LEGEND = "location:legend",
    NATION_DECK = "location:nationDeck",
    ACCESSION = "location:accessionCard",
    DEVELOPMENT_AREA = "location:developmentArea"
}

export type LocatedCard = [card: ICard, location: Location | CardName];

export class Player {
    material: number = 0;
    population: number = 0;
    progress: number = 0;
    goods: number = 0;

    // cards not yours
    nationDeckCards: Array<ICard> = [];
    accessionCard?: ICard;
    developmentAreaCards: Array<ICard> = [];

    // cards
    stateCard?: ICard;
    inPlayCards: Array<ICard> = []; // including power, permanent, pinned, trade-route
    garrisonedCards: Array<[ICard, CardName]> = [];
    drawDeckCards: Array<ICard> = [];
    discardPileCards: Array<ICard> = [];
    handCards: Array<ICard> = [];
    historyCards: Array<ICard> = [];
    sunkenCards: Array<ICard> = []; // only for Atlantean
    legendCards: Array<ICard> = []; // only for Polynesians

    public allOpponents(): Array<Player> {
        return [];
    }

    public allPlayerCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = [];
        // nation deck
        this.nationDeckCards.forEach((card)=> result.push([card, Location.NATION_DECK]));
        if (this.accessionCard !== undefined) result.push([this.accessionCard, Location.ACCESSION]);
        // development area
        this.developmentAreaCards.forEach((card)=> result.push([card, Location.DEVELOPMENT_AREA]));
        // state card
        if (this.stateCard !== undefined) result.push([this.stateCard, Location.STATE]);
        // in play card
        this.inPlayCards.forEach((card)=> result.push([card, Location.IN_PLAY]));
        // garrisoned card
        this.garrisonedCards.forEach(([card, cardName])=> result.push([card, cardName]));
        // draw, discard and hand card
        this.drawDeckCards.forEach((card)=> result.push([card, Location.DRAW_DECK]));
        this.discardPileCards.forEach((card)=> result.push([card, Location.DISCARD_PILE]));
        this.handCards.forEach((card)=> result.push([card, Location.HAND]));
        // history, sunken or legend
        this.historyCards.forEach((card)=> result.push([card, Location.HISTORY]));
        this.sunkenCards.forEach((card)=> result.push([card, Location.SUNKEN]));
        this.legendCards.forEach((card)=> result.push([card, Location.LEGEND]));

        return result;
    }

    public allScoringCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = this.allPlayerCards();
        return result.filter((locatedCard: LocatedCard) => {
            const location: Location | CardName = locatedCard[1];
            // if not garrisoned
            if (location.startsWith("location:")) {
                return location !== Location.NATION_DECK && location !== Location.ACCESSION && location !== Location.DEVELOPMENT_AREA;
            }
            // if garrisoned
            return location !== CardName.KING_ARTHUR_S_COURT;
        })
    }

    public selectCards(cond: ((card: LocatedCard) => boolean) | boolean, scoring: boolean = true): Array<LocatedCard> {
        const result: Array<LocatedCard> = scoring ? this.allScoringCards() : this.allPlayerCards();
        if (typeof cond === 'boolean')
            return cond ? result : [];
        return result.filter((card: LocatedCard): boolean => cond(card));
    }

    public static countSuit(suit: CardSuitIcon, cards: Array<LocatedCard>) {
        return cards.reduce(
            (count: number, card: LocatedCard): number =>
                count + card[0].suit.filter(
                    suit1 => suit1 === suit
                ).length,
            0);
    }

    public getVictoryPoint(): number {
        return this.allScoringCards().reduce(
            (points: number, card: LocatedCard): number => points + card[0].getVictoryPoints({
                player: this,
                location: card[1]
            }), this.progress);
    }
}
