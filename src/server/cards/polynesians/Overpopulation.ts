import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Overpopulation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OVERPOPULATION,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL17",
            effectText: [
                "Cannot be discarded during your Clean-up step. Cannot be garrisoned or gained as mana. Free play.",
                "Solstice: gain 1{population}, then choose: pay 3{material} OR take a {unrest}."
            ],
            victoryPoints: -4,
        });
    }
}
