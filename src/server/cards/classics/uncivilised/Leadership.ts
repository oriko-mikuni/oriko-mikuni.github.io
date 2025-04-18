import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Leadership extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LEADERSHIP_C,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1UNC21",
            effectText: [
                "Free play. Choose: draw a card OR put a card from your hand or discard pile into your history."
            ],
            victoryPoints: 1,
        });
    }
}
