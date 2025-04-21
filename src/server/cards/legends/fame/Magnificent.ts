import {Card} from "../../Card";
import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Magnificent extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAGNIFICENT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM3",
            effectText: [
                "Free play. Draw a card.",
                "You MAY return an {unrest}."
            ],
            victoryPoints: 5
        });
    }
}
