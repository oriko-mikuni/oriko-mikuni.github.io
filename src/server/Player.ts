
/**
 * Behavior when playing a card:
 *   add it to the play area
 *   resolve its play effects
 *   then discard it if it's still in play unless it's pinned or trade route
 */

import { CardName } from "../common/cards/CardName";
import { Units } from "../common/Units";
import { ICard } from "./cards/ICard";

export class Player {

    public readonly id: string;
    // protected waitingFor?: PlayerInput;
    // protected waitingForCb?: () => void;
    // public game: Game;

    // resources
    public material: number = 0;
    public population: number = 0;
    public progress: number = 0;
    public goods: number = 0;

    // actions
    public remainingActions: number = 0;
    public remainingExhausts: number = 0;

    // in play
    public exhaustedCards: Set<CardName> = new Set();
    public powerCardInPlay: Array<ICard> = [];
    public permanentCardInPlay: Array<ICard> = [];
    public pinnedCardInPlay: Array<ICard> = [];
    public TradeRoutesInPlay: Array<ICard> = [];

    // not in play
    public cardsInGarrison: Array<ICard> = [];
    public cardsInHand: Array<ICard> = [];
    public cardsInDrawDeck: Array<ICard> = [];
    public cardsInDiscardPile: Array<ICard> = [];

    // out of play
    public hasHistory: boolean = true;
    public hasFlooded: boolean = false;
    public hasLegends: boolean = false;
    public cardsInHistory: Array<ICard> = [];
    public cardsInFloodedPile: Array<ICard> = [];
    public cardsInLegendsPile: Array<ICard> = [];

    // not yours
    public nationDeck: Array<ICard> = [];
    public accesssionCard: Array<ICard> = [];
    public developmentArea: Array<ICard> = [];
    public impendingQuest: Array<ICard> = [];

    public get inPlay(): Array<ICard> {
        return [...this.powerCardInPlay, ...this.permanentCardInPlay, ...this.pinnedCardInPlay, ...this.TradeRoutesInPlay];
    }

    public cardIsInEffect(cardName: CardName): boolean {
        return this.inPlay.some((card) => card.name === cardName);
    }

    public cardCanBeExhausted(cardName: CardName): boolean {
        return this.cardIsInEffect(cardName) && this.remainingExhausts > 0 && !this.exhaustedCards.has(cardName);
    }

    // currently only power / permanent can change how much you gain
    public gainResource(resourceUnit: Units, source: string) {
        var wouldGainProgress = resourceUnit.progress;
        var wouldGainPopulation = resourceUnit.population;
        var wouldGainMaterial = resourceUnit.material;
        var wouldGainGoods = resourceUnit.goods;

        if (this.cardCanBeExhausted(CardName.CARTHAGINIANS_POWER_A)) {
            if (source === 'market' && resourceUnit.material > 0) {
                // TODO: implement exhaust to gain double material effect.
            }
        }

        this.progress += wouldGainProgress;
        this.goods += wouldGainGoods;
        this.material += wouldGainMaterial;
        this.population += wouldGainPopulation;
    }
}