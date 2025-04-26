import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";

export class Taxation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAXATION,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV1",
            effectText: [
                "Free play. Gain 1{goods} per player with equal or more {city}/{metropolis} in play than you."
            ],
            playerCount: 4,
            victoryPoints: 2,
        });
    }
}
