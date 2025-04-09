import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Development extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DEVELOPMENT_ATL,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL5",
            effectText: "Choose: develop OR acquire {civilised}.",
            developmentCost: {material: 4},
            victoryPoints: 2,
        });
    }
}
