import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Druids extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DRUIDS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL14",
            effectText: "Choose: gain 1{progress}\n" +
                "OR pay 1{population} to break through for {uncivilised}\n" +
                "OR return an {unrest} to gain 1{population}.",
        });
    }
}
