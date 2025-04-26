import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Sabaeans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SABAEANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI10",
            effectText: [
                "If {barbarian}, gain 2{progress}. If {empire}, develop and put this card into your history."
            ],
            victoryPoints: 3,
        });
    }
}
