import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class Althing extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ALTHING,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK23",
            effectText: "Steal 1{material} from each other player.\n" +
                "Choose: gain 1{progress} OR return an {unrest}.",
        });
    }
}
