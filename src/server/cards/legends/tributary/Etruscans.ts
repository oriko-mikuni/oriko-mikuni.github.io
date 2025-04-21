import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";

export class Etruscans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ETRUSCANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            cardNumber: "2TRI1",
            effectText: [
                "Gain 2{progress}."
            ],
            victoryPoints: 3,
        });
    }
}
