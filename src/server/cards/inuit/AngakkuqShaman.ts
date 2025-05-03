import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class AngakkuqShaman extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ANGAKKUQ_SHAMAN,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU17",
            effectText: [
                "Choose: gain 1{progress} OR pay 2{material} to break through for a {uncivilised} OR return a {unrest} to gain 1{population}."
            ],
            developmentCost: {population: 2},
            victoryPoints: 3,
        });
    }
}
