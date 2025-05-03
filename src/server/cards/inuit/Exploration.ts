import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Exploration extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EXPLORATION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardNumber: "INU14",
            effectText: [
                "Choose: pay 2{population} to acquire a {region} (including from exiled cards) OR pay 5{population} to break through for a {tributary} (including from exiled card)."
            ],
            developmentCost: {population: 2},
            victoryPoints: 3,
        });
    }
}
