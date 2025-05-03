import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class ThroatSinging extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THROAT_SINGING,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU19",
            effectText: [
                "Free play. Choose: return 1 {exhaust} to your state card OR return a card from your discard pile to the top of your deck."
            ],
            developmentCost: {population: 2},
            victoryPoints: 3,
        });
    }
}
