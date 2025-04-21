import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Monument extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MONUMENT,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC6",
            effectText: [
                "Exhaust: free play an {unrest}."
            ],
            victoryPoints: 1,
        });
    }
}
