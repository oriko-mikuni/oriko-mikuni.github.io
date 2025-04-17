import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class MinoanTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINOAN_TRADERS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN3",
            effectText: [
                "Each other player gains 2{material}.",
                "Choose: gain 1{material} per {production} OR gain 1{population} per {region} OR gain 1{progress} per {city}/{metropolis} in your play area."
            ],
            developmentCost: {progress: 1, material: 2, population: 1},
            victoryPoints: 2,
        });
    }
}
