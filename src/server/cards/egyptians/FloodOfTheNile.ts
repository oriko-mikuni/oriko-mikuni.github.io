import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class FloodOfTheNile extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FLOOD_OF_THE_NILE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY14",
            effectText: "Abandon a {river} to choose: gain 5{material}\n" +
                "OR if {empire} break through for {uncivilised}/{civilised}.",
        });
    }
}
