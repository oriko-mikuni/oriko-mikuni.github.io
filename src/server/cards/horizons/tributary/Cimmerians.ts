import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Cimmerians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CIMMERIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI11",
            effectText: [
                "All players MAY draw a card.",
                "Gain 2{material} per {production} you have in play."
            ],
            playerCount: 4,
            victoryPoints: 3,
        });
    }
}
