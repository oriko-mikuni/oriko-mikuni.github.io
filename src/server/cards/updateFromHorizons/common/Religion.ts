import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class Religion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RELIGION_NEW,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MIRACLE],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC8X",
            effectText: [
                "Exhaust: gain 1 action.",
                "Solstice: choose: take a {unrest} and place it on the top of your deck OR pay 3{material}."
            ],
            victoryPoints: 1,
            gameModule: GameModule.LEGENDS_COMMON
        });
    }
}
