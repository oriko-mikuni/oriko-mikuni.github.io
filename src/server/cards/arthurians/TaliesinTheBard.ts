import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TaliesinTheBard extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TALIESIN_THE_BARD,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardNumber: "ART6",
            effectText: [
                "Find a {knight} and put it to your history to look at the top 2 cards of the {fame} deck.",
                "Take one of those cards."
            ],
            victoryPoints: 1,
        });
    }
}
