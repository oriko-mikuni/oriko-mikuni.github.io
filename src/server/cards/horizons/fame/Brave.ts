import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Brave extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BRAVE,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3FAM7",
            effectText: [
                "Free play.",
                "For the rest of the turn, when you acquire a card you MAY immediately free play the {unrest} taken."
            ],
            victoryPoints: 8,
        });
    }
}
