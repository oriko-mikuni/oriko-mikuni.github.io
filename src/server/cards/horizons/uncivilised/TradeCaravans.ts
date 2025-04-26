import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class TradeCaravans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRADE_CARAVANS,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC4",
            effectText: [
                "Exhaust: choose: move 2 of your {material} to 2 different cards in the market to gain 1{goods} OR if {barbarian}, pay 2{material} and discard a card to acquire a card in the market with {material} on it."
            ],
            victoryPoints: 1,
        });
    }
}
