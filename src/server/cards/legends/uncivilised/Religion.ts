import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Religion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RELIGION,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC8",
            effectText: [
                "Exhaust: gain 1 action.",
                "Solstice: choose: take {unrest} OR pay 3{material}."
            ],
            victoryPoints: 1,
        });
    }
}
