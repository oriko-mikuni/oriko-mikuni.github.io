import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";

export class Education extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EDUCATION_L,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "2CIV2",
            effectText: [
                "Free play. You MAY put a card from your hand into your history.",
                "You MAY put a card from your discard pile into your history."
            ],
            victoryPoints: 2,
        });
    }
}
