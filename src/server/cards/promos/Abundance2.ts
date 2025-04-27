import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {KeywordNames} from "../../../common/keywords";

export class Abundance2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROMO_ABUNDANCE2,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "ABU2",
            effectText: [
                "Gain 1{material} per {production} you have in play.",
                "Every player adds 1{population} to each {region} they have in play. Add 1{population} to each {region} in the market."
            ],
            keywords: [
                KeywordNames.promoAbundance,
                KeywordNames.resourceOnCard
            ]
        });
    }
}
