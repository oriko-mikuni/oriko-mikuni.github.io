import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class GoAViking extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GO_A_VIKING,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK13",
            effectText: "Free play.\n" +
                "Steal 2{material} from each other player.\n" +
                "Anyone unable to pay takes {unrest}.",
        });
    }
}
