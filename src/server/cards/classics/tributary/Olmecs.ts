import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Olmecs extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OLMECS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI6",
            effectText: [
                "Free play. Return an {exhaust} to your state card.",
            ],
            playerCount: 3,
            victoryPoints: 3,
        });
    }
}
