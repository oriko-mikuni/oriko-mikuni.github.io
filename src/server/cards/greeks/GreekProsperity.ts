import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class GreekProsperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEK_PROSPERITY,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE3",
            effectText: [
                "Choose: gain 1{material} per {production} OR gain 1{population} per {region} OR draw a card per {city}/{metropolis} in play."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 2,
        });
    }
}
