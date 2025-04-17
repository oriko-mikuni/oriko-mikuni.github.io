import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class BatteringRam extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BATTERING_RAM,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.PER,
            cardNumber: "PER3",
            effectText: [
                "Each other player abandons a {city}.",
                "You MAY break through for {region}/{tributary}."
            ],
            developmentCost: {population: 4},
            victoryPoints: 2,
        });
    }
}
