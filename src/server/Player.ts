import {Card} from "./cards/Card";
import {CardSuitIcon} from "../common/cards/CardSuitIcon";
import {ICard} from "./cards/ICard";
import {CardName} from "../common/cards/CardName";

export enum PlayerAreas {
    STATE = "state",
    IN_PLAY = "inPlay",
    GARRISON = "garrison",
    CYCLING = "cycling",
    HISTORY = "history",
    SUNKEN = "sunken",
    LEGEND = "legend",
    NATION_DECK = "nationDeck",
    DEVELOPMENT_AREA = "developmentArea"
}

export class Player {
    material: number = 0;
    population: number = 0;
    progress: number = 0;
    goods: number = 0;

    // cards not yours
    nationDeckCards: Array<ICard> = [];
    accessionCard: Array<ICard> = [];
    developmentAreaCards: Array<ICard> = [];

    // cards
    stateCard?: ICard;
    inPlayCards: Array<ICard> = []; // including power, permanent, pinned, trade-route
    garrisonedCards: Partial<Record<CardName, Array<ICard>>> = {};
    drawDeckCards: Array<ICard> = [];
    discardPileCards: Array<ICard> = [];
    handCards: Array<ICard> = [];
    historyCards: Array<ICard> = [];
    sunkenCards: Array<ICard> = []; // only for Atlantean
    legendCards: Array<ICard> = []; // only for Polynesians

    public allOpponents(): Array<Player> {
        return [];
    }
    public allCards(): Array<Card> {
        return [];
    }

    public cardCount(cond?: (card: Card) => boolean): number {
        if (cond === undefined) {
            return this.allCards().length;
        }
        return this.allCards().filter(card => cond(card)).length;
    }

    public suitCount(suit: CardSuitIcon, cond?: (card: Card) => boolean): number {
        let returnValue: number = 0;
        if (cond === undefined) {
            this.allCards().forEach(card =>
                returnValue += card.suit.filter(suit1 => suit1 === suit).length
            );
        } else {
            this.allCards().filter(card => cond(card)).forEach(card =>
                returnValue += card.suit.filter(suit1 => suit1 === suit).length
            );
        }
        return returnValue;
    }

    public getVictoryPoint(): number {
        let victoryPoint: number = 0;
        if (this.stateCard !== undefined) {
            victoryPoint = victoryPoint + this.stateCard.getVictoryPoints({player: this, location: PlayerAreas.STATE});
        }
        this.inPlayCards.forEach(card => {
            victoryPoint = victoryPoint + card.getVictoryPoints({player: this, location: PlayerAreas.IN_PLAY});
            const garrisoned: Array<ICard> | undefined = this.garrisonedCards[card.name];
            if (garrisoned !== undefined) {
                garrisoned.forEach(garrison => {
                    victoryPoint = victoryPoint + garrison.getVictoryPoints({player: this, location: PlayerAreas.GARRISON});
                })
            }
        });
        this.drawDeckCards.concat(this.discardPileCards).concat(this.handCards).forEach(card => {
            victoryPoint = victoryPoint + card.getVictoryPoints({player: this, location: PlayerAreas.CYCLING});
        });
        this.historyCards.forEach(card => {
            victoryPoint = victoryPoint + card.getVictoryPoints({player: this, location: PlayerAreas.HISTORY});
        });
        this.sunkenCards.forEach(card => {
            victoryPoint = victoryPoint + card.getVictoryPoints({player: this, location: PlayerAreas.SUNKEN});
        });
        this.legendCards.forEach(card => {
            victoryPoint = victoryPoint + card.getVictoryPoints({player: this, location: PlayerAreas.LEGEND});
        });
        victoryPoint = victoryPoint + this.progress;
        return victoryPoint;
    }
}
