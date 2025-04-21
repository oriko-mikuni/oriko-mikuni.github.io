import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Diplomacy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DIPLOMACY_L,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2UNC20",
            effectText: [
                "Pay 3{material} to break through for {tributary}."
            ],
            victoryPoints: 1,
        });
    }
}
