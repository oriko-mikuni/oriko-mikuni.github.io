import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class Althing extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALTHING,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK23",
            effectText: [
                "Steal 1{material} from each other player.",
                "Choose: gain 1{progress} OR return an {unrest}."
            ],
        });
    }
}
