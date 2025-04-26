import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {GameModule} from "../../../../common/cards/GameModule";

export class Celts extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTS_NEW,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2TRI9X",
            effectText: [
                "Pay 1{progress}.",
                "Each other player takes a {unrest}.",
                "Break through for a {uncivilised}."
            ],
            victoryPoints: 3,
            gameModule: GameModule.LEGENDS_COMMON
        });
    }
}
