import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Mysticism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MYSTICISM,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC8",
            effectText: [
                "Exhaust: gain 1 action.",
                "Solstice: choose: take {unrest} OR discard 2 cards."
            ],
            victoryPoints: 1,
        });
    }
}
