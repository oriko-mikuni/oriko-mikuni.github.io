import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Ashoka extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ASHOKA,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU5",
            effectText: "Take the top {fame} card.\n" +
                "Reveal your hand, draw deck, and\n" +
                "discard pile and put all {attack} and this\n" +
                "card into your history.",
            developmentCost: {population: 3},
            victoryPoints: 1,
        });
    }
}
