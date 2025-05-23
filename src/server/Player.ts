import {CardSuitIcon} from "../common/cards/CardSuitIcon";
import {ICard} from "./cards/ICard";
import {Game} from "./Game";
import {CardTypeIcon} from "../common/cards/CardTypeIcon";
import {Units} from "../common/Units";
import {KeywordNames} from "../common/keywords";

export enum PlayerCardLocation {
    STATE = "location:state",
    NATION_POWER = "location:nation-power",
    IN_PLAY = "location:in-play",
    DRAW_DECK = "location:draw-deck",
    DISCARD_PILE = "location:discard-pile",
    HAND = "location:hand",
    HISTORY = "location:history",
    SUNKEN = "location:sunken",
    LEGENDS = "location:legends",
    NATION_DECK = "location:nationDeck",
    ACCESSION = "location:accessionCard",
    DEVELOPMENT_AREA = "location:developmentArea"
}

export type PlayerCardLocationOrGarrison = PlayerCardLocation | ICard;

export function isPlayerLocation(arg: PlayerCardLocationOrGarrison): arg is PlayerCardLocation {
    return typeof arg === "string";
}

export function isInPlayLocation(location: PlayerCardLocation | ICard): boolean {
    return location === PlayerCardLocation.IN_PLAY
        || location === PlayerCardLocation.STATE
        || location === PlayerCardLocation.NATION_POWER;
}

// if garrisoned, location is that card it is garrisoned under, which is ICard
// if not garrisoned, location is a string which satisfies isPlayerLocation()
export type LocatedCard = {location: PlayerCardLocationOrGarrison, card: ICard};

export class Player {
    game: Game;
    id: string;

    // your resources
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
    nationPower?: ICard;
    inPlayCards: Array<ICard> = []; // including power, permanent, pinned, trade-route

    garrisonedCards: Array<[ICard, ICard]> = [];
    drawDeckCards: Array<ICard> = [];
    discardPileCards: Array<ICard> = [];
    handCards: Array<ICard> = [];
    historyCards: Array<ICard> = [];
    sunkenCards: Array<ICard> = []; // only for Atlantean
    legendsCards: Array<ICard> = []; // only for Polynesians

    // resources on your cards
    resourceOnYourCards: Array<[ICard, Units]> = [];

    constructor(id: string, game: Game) {
        this.id = "p" + id;
        this.game = game;
    }

    public allOpponents(): Array<Player> {
        return this.game.players.filter((player1) => player1.id !== this.id);
    }

    public allPlayerCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = [];
        // nation deck
        this.nationDeckCards.forEach(card => result.push({card: card, location: PlayerCardLocation.NATION_DECK}));
        if (this.accessionCard !== undefined) result.push({card: this.accessionCard, location: PlayerCardLocation.ACCESSION});
        // development area
        this.developmentAreaCards.forEach(card => result.push({card: card, location: PlayerCardLocation.DEVELOPMENT_AREA}));

        // state & nation power card
        if (this.stateCard !== undefined) result.push({card: this.stateCard, location: PlayerCardLocation.STATE});
        if (this.nationPower !== undefined) result.push({card: this.nationPower, location: PlayerCardLocation.NATION_POWER})

        // in play card
        this.inPlayCards.forEach(card => result.push({card: card, location: PlayerCardLocation.IN_PLAY}));
        // garrisoned card
        this.garrisonedCards.forEach(([card, garrisonCard])=> result.push({card: card, location: garrisonCard}));
        // draw, discard and hand card
        this.drawDeckCards.forEach(card => result.push({card: card, location: PlayerCardLocation.DRAW_DECK}));
        this.discardPileCards.forEach(card => result.push({card: card, location: PlayerCardLocation.DISCARD_PILE}));
        this.handCards.forEach(card => result.push({card: card, location: PlayerCardLocation.HAND}));
        // history, sunken or legend
        this.historyCards.forEach(card => result.push({card: card, location: PlayerCardLocation.HISTORY}));
        this.sunkenCards.forEach(card => result.push({card: card, location: PlayerCardLocation.SUNKEN}));
        this.legendsCards.forEach(card => result.push({card: card, location: PlayerCardLocation.LEGENDS}));

        return result;
    }

    public allScoringCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = this.allPlayerCards();
        return result.filter((locatedCard: LocatedCard) => {
            const location: PlayerCardLocation | ICard = locatedCard.location;
            // if not garrisoned, exclude nation deck and development area
            if (isPlayerLocation(location)) {
                return location !== PlayerCardLocation.NATION_DECK && location !== PlayerCardLocation.ACCESSION && location !== PlayerCardLocation.DEVELOPMENT_AREA;
            }
            // if garrisoned, exclude garrison under King Arthur's Court
            return location.keywords === undefined || location.keywords.every(keyword => keyword !== KeywordNames.doNotScoreActiveQuest);
        })
    }

    public selectCards(cond: ((card: LocatedCard) => boolean) | boolean = true, scoring: boolean = true): Array<LocatedCard> {
        const result: Array<LocatedCard> = scoring ? this.allScoringCards() : this.allPlayerCards();
        if (typeof cond === 'boolean')
            return cond ? result : [];
        return result.filter((card: LocatedCard): boolean => cond(card));
    }

    public hasKeywordInPlay(keyword: KeywordNames): boolean {
        const cards: Array<LocatedCard> = this.selectCards(card => isInPlayLocation(card.location));
        return cards.some(card =>
            card.card.keywords &&
            card.card.keywords.some(keyword1 =>
                keyword1 === keyword
            )
        );
    }

    public static countSuit(suit: CardSuitIcon, cards: Array<LocatedCard>): number {
        return cards.reduce(
            (count: number, card: LocatedCard): number =>
                count + card.card.suit.filter(suit1 => suit1 === suit).length,
            0);
    }

    public static countType(type: CardTypeIcon, cards: Array<LocatedCard>): number {
        return cards.reduce(
            (count: number, card: LocatedCard): number =>
                count + card.card.typeIcon.filter(type1 => type1 === type).length,
            0);
    }

    public scoringResources(): Units {
        const yourSupply: Units = {
            material: this.material,
            population: this.population,
            progress: this.progress,
            goods: this.goods
        };
        if (this.hasKeywordInPlay(KeywordNames.freeTribes)) {
            return this.resourceOnYourCards.reduce((unit: Units, [, cardUnit]: [ICard, Units]): Units => {
                return {
                    material: unit.material + cardUnit.material,
                    population: unit.population + cardUnit.population,
                    progress: unit.progress + cardUnit.progress,
                    goods: unit.goods + cardUnit.goods
                }
            }, yourSupply);
        }
        return yourSupply;
    }

    public getVictoryPoint(): number {
        const scoringResources: Units = this.scoringResources();

        const alienProgress: boolean = this.hasKeywordInPlay(KeywordNames.alienProgress);
        const noNegativeFromUnrest: boolean = this.hasKeywordInPlay(KeywordNames.noNegativeFromUnrest);

        const baseScoringProgress: number = alienProgress
            ? Math.floor(scoringResources.progress / 3)
            : scoringResources.progress;

        return this.allScoringCards().reduce(
            (points: number, card: LocatedCard): number => {
                let vp: number = card.card.getVictoryPoints({
                    player: this,
                    location: card.location,
                    scoringResources: scoringResources
                });

                if (noNegativeFromUnrest && card.card.suit.some(
                    suit => suit === CardSuitIcon.UNREST))
                    vp = Math.max(vp, 0);

                return points + vp;
            }, baseScoringProgress);
    }
}
