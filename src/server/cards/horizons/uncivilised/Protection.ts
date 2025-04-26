import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Protection extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROTECTION,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC23",
            effectText: [
                "Passive: when you are affected by {attack} cards, gain 1{goods} and you MAY draw a card."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 1,
        });
    }
}
