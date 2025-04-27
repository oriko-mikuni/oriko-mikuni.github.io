import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {KeywordNames} from "../../../common/keywords";

export class HeirPresumptive extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROMO_HEIR_PRESUMPTIVE,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "9UNC1",
            effectText: [
                "Free play. Take an {unrest} to find a leader in your out of play area, take it into your hand, and put this card in its place."
            ],
            victoryPoints: 1,
            keywords: [
                KeywordNames.leader,
                KeywordNames.outOfPlayArea
            ]
        });
    }
}
