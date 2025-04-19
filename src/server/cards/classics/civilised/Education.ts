import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";

export class Education extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EDUCATION_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            cardNumber: "1CIV2",
            effectText: [
                "Free play. You MAY put a card from your hand into your history.",
                "You MAY put a card from your discard pile into your history."
            ],
            victoryPoints: 2,
        });
    }
}
