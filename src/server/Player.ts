import {CardSuitIcon} from "../common/cards/CardSuitIcon";
import {ICard} from "./cards/ICard";
import {Game} from "./Game";
import {CardTypeIcon} from "../common/cards/CardTypeIcon";
import {Units} from "../common/Units";
import {KeywordNames} from "../common/keywords";

import {CardLocation, CardLocationOrGarrison, isCardLocation, isInPlayLocation} from "../common/cards/CardLocation";
import {CardName} from "../common/cards/CardName";

// if garrisoned, location is that card it is garrisoned under, which is ICard
// if not garrisoned, location is a string which satisfies isPlayerLocation()
export type LocatedCard = {location: CardLocationOrGarrison, card: ICard};

export class Player {
    game: Game;
    id: string;

    // available action and exhaust
    action: number = 3;
    exhaust: number = 5;

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

    drawDeckCards: Array<ICard> = [];
    discardPileCards: Array<ICard> = [];
    handCards: Array<ICard> = [];
    historyCards: Array<ICard> = [];
    sunkenCards: Array<ICard> = []; // only for Atlantean
    legendsCards: Array<ICard> = []; // only for Polynesians

    constructor(id: string, game: Game) {
        this.id = "p" + id;
        this.game = game;
    }

    public get tableau(): Array<ICard> {
        const result: Array<ICard> = [...this.inPlayCards];
        if (this.nationPower) result.push(this.nationPower);
        if (this.stateCard) result.push(this.stateCard);
        return result;
    }

    public allOpponents(): Array<Player> {
        return this.game.players.filter((player1) => player1.id !== this.id);
    }

    public allPlayerCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = [];
        // nation deck
        this.nationDeckCards.forEach(card => result.push({card: card, location: CardLocation.NATION_DECK}));
        if (this.accessionCard !== undefined) result.push({card: this.accessionCard, location: CardLocation.ACCESSION});
        // development area
        this.developmentAreaCards.forEach(card => result.push({card: card, location: CardLocation.DEVELOPMENT_AREA}));

        // state & nation power card
        if (this.stateCard !== undefined) result.push({card: this.stateCard, location: CardLocation.STATE});
        if (this.nationPower !== undefined) result.push({card: this.nationPower, location: CardLocation.NATION_POWER})

        // in play and garrisoned card
        for (const card of this.inPlayCards) {
            result.push({card: card, location: CardLocation.IN_PLAY});
            card.garrisonedCards.forEach(garrisoned => result.push({card: garrisoned, location: card.name}));
        }
        // draw, discard and hand card
        this.drawDeckCards.forEach(card => result.push({card: card, location: CardLocation.DRAW_DECK}));
        this.discardPileCards.forEach(card => result.push({card: card, location: CardLocation.DISCARD_PILE}));
        this.handCards.forEach(card => result.push({card: card, location: CardLocation.HAND}));
        // history, sunken or legend
        this.historyCards.forEach(card => result.push({card: card, location: CardLocation.HISTORY}));
        this.sunkenCards.forEach(card => result.push({card: card, location: CardLocation.SUNKEN}));
        this.legendsCards.forEach(card => result.push({card: card, location: CardLocation.LEGENDS}));

        return result;
    }

    public allScoringCards(): Array<LocatedCard> {
        const result: Array<LocatedCard> = this.allPlayerCards();
        return result.filter((locatedCard: LocatedCard) => {
            const location: CardLocationOrGarrison = locatedCard.location;
            // if not garrisoned, exclude nation deck and development area
            if (isCardLocation(location)) {
                return location !== CardLocation.NATION_DECK && location !== CardLocation.ACCESSION && location !== CardLocation.DEVELOPMENT_AREA;
            }
            // if garrisoned, exclude garrison under King Arthur's Court
            return location !== CardName.KING_ARTHUR_S_COURT;
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
            return this.tableau.reduce((unit: Units, card: ICard): Units => {
                return {
                    material: unit.material + (card.resourceUpon.material ?? 0),
                    population: unit.population + (card.resourceUpon.population ?? 0),
                    progress: unit.progress + (card.resourceUpon.progress ?? 0),
                    goods: unit.goods + (card.resourceUpon.goods ?? 0)
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
                    scoringResources: scoringResources,
                    resourceUpon: card.card.resourceUpon
                });

                if (noNegativeFromUnrest && card.card.suit.some(
                    suit => suit === CardSuitIcon.UNREST))
                    vp = Math.max(vp, 0);

                return points + vp;
            }, baseScoringProgress);
    }
}
