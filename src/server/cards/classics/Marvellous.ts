import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Marvellous extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MARVELLOUS,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM4",
            effectText: "Free play. Draw the top card of your\n" +
                "deck if able and choose:\n" +
                "discard it OR return it to the top\n" +
                "OR put it in into your history.",
            victoryPoints: 9,
        })
    }
}
