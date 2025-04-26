import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class AndesHighway extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ANDES_HIGHWAY,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO8",
            effectText: [
                "Commerce: gain 2{population} and 1{progress}.",
                "Profit (3{goods}): place a card on the top of your deck to take the top {fame} card and exile this card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
