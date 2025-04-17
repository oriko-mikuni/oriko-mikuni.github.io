import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Satrap extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SATRAP,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER6",
            effectText: [
                "Free play. Pay 3{material} to gain 1 action."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 3,
        });
    }
}
