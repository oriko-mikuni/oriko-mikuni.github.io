import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Illyrians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ILLYRIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3TRI12",
            effectText: [
                "Exhaust: pay 1{material} to choose: place a {attack} card from your discard pile on the top of your deck OR put a card from your discard pile into your history."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 3,
        });
    }
}
