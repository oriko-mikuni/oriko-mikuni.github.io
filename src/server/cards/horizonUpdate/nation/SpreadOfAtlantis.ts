import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {GameModule} from "../../../../common/cards/GameModule";

export class SpreadOfAtlantis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SPREAD_OF_ATLANTIS_NEW,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL4X",
            effectText: [
                "Pay 1{population} to break through for a {region}/{tributary}.",
                "Each other player recalls a {region}."
            ],
            developmentCost: {material: 4},
            developmentCostString: [
                ", take a {unrest}"
            ],
            victoryPoints: 4,
            gameModule: GameModule.ATLANTEANS
        });
    }
}
