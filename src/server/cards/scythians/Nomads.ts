import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Nomads extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOMADS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY14",
            effectText: "All players MAY draw a card.\n" +
                "Gain 1{material} per {production} you have in play.",
        });
    }
}
