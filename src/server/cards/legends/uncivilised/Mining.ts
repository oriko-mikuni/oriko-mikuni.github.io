import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Mining extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINING,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC1",
            effectText: [
                "Exhaust: abandon a {region} to gain 1{progress}.",
                "If the abandoned card has no {production}, gain an additional {progress}."
            ],
            playerCount: 4,
            victoryPoints: 1,
        });
    }
}
