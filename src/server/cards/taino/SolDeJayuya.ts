import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class SolDeJayuya extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SOL_DE_JAYUYA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAI,
            cardNumber: "TAI9",
            effectText: [
                "Gain 1{progress} per 2 {production} you have in play.",
                "Put a {region} you have in play into your history."
            ],
        });
    }
}
