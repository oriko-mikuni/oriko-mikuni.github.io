import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class HopewellExchangeSystem extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HOPEWELL_EXCHANGE_SYSTEM,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO5",
            effectText: [
                "Commerce: choose: put up to 2 cards from your hand and/or discard pile into your history OR draw 2 cards.",
                "Profit (3{goods}): choose up to 7 times: gain 1{material} OR gain 1{population}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
