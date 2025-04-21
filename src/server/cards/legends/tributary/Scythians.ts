import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Scythians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCYTHIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2TRI2",
            effectText: [
                "Exhaust: when another player plays an {attack}, you MAY exhaust this card to avoid its effects (even if it's another player's turn)."
            ],
            victoryPoints: 3,
        });
    }
}
