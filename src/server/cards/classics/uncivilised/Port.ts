import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Port extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PORT,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC19",
            effectText: [
                "Exhaust: gain 1{material} per {river} in your play area. You MAY pay 3{material} to draw a card of your choice from your discard pile."
            ],
            victoryPoints: 1,
        });
    }
}
