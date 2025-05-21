import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class Welcoming extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WELCOMING,
            suit: [CardSuitIcon.FAME, CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3FAM3",
            effectText: [
                "Commerce: gain 1 action. The owner of this card MAY draw a card.",
                "Profit (3{goods}): Look at the top 5 cards of the main deck and free play one of them. Put this card into history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 5,
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
