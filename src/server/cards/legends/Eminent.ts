import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Eminent extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMINENT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM7",
            effectText: [
                "Free play. Draw 2 cards."
            ],
            victoryPoints: 8,
        });
    }
}
