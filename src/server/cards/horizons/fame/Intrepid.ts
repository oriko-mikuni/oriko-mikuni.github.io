import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Intrepid extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INTREPID,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3FAM8",
            effectText: [
                "Free play.",
                "Exhaust: when you acquire a card, exhaust this card to choose: draw a card OR gain 1{progress}. If you break through for a card, you MAY instead do both."
            ],
            victoryPoints: 5,
        });
    }
}
