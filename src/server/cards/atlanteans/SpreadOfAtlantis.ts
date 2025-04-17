import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class SpreadOfAtlantis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SPREAD_OF_ATLANTIS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL4",
            effectText: [
                "All other players recall a {region}.",
                "Break through for {region}/{tributary}."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
