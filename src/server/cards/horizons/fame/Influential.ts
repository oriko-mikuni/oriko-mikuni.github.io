import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Influential extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INFLUENTIAL,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3FAM9",
            effectText: [
                "Free play. Choose: draw 2 cards OR free play a card (ignoring {barbarian}/{empire})."
            ],
            victoryPoints: 3,
        });
    }
}
