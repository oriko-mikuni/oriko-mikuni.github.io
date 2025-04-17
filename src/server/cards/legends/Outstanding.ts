import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Outstanding extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OUTSTANDING,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM4",
            effectText: [
                "Free play. Put up to 2 cards from your discard pile into your history."
            ],
            victoryPoints: 7,
        })
    }
}
