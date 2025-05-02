import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Bohio extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BOHIO,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAI,
            cardNumber: "TAI17",
            effectText: [
                "Each other player MAY draw a card.",
                "Choose for each {fertile}, {river}, and {ocean} you have in play: gain 2{material} OR gain 1{population}."
            ],
        });
    }
}
