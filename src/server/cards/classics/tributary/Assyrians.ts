import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Assyrians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ASSYRIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI2",
            effectText: [
                "Free play. Gain 1{population}."
            ],
            victoryPoints: 3,
        });
    }
}
