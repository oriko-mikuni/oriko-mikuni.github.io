import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class SoilRotation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SOIL_ROTATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAI,
            cardNumber: "TAI13",
            effectText: [
                "Pay 2{material}. Each {fertile} you have in play counts as {production} for the rest of this turn.",
                "Choose: draw a {region} from your discard pile OR free play a {region}."
            ],
        });
    }
}
