import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class SwahiliCoast extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SWAHILI_COAST,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO6",
            effectText: [
                "Commerce: draw a card and gain 1{progress}.",
                "Profit (3{goods}): break through for a {uncivilised} (including from exiled cards)."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
