import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Meditation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MEDITATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.UTO,
            cardNumber: "UTO10",
            effectText: [
                "Free play. Return a card from your discard pile to the top of your deck.",
                "All other players MAY draw a card."
            ],
        });
    }
}
