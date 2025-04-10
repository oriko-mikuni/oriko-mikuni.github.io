import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Charity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHARITY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.UTO,
            cardNumber: "UTO9",
            effectText: "Gain 1{progress}.\n" +
                "Each other player MAY gain 2{material}.",
        });
    }
}
