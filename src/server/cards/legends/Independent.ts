import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Independent extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INDEPENDENT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM2",
            effectText: "Free play. Gain 3{material} and 2{population}.",
            victoryPoints: 3,
        });
    }
}
