import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Kushites extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KUSHITES,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY12",
            effectText: "Gain 2{progress}.",
        });
    }
}
