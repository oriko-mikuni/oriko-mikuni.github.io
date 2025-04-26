import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Honourable extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HONOURABLE,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3FAM6",
            effectText: [
                "Free play.",
                "All players MAY return a {unrest} from their hand or discard pile.",
                "Gain 1{progress} per {unrest} returned."
            ],
            victoryPoints: 5,
        });
    }
}
