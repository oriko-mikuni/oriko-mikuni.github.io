import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Celts extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2TRI9",
            effectText: [
                "Break through for {uncivilised}.",
                "Each other player takes {unrest}."
            ],
            victoryPoints: 3,
        });
    }
}
