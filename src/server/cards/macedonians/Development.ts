import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Development extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DEVELOPMENT_MAC,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC3",
            effectText: [
                "Choose: develop OR pay 2{material} to acquire {uncivilised}/{civilised}."
            ],
            developmentCost: {material: 4, population: 1},
            victoryPoints: 3,
        });
    }
}
