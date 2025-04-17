import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MoatsAndWalls extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOATS_AND_WALLS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL6",
            effectText: [
                "Exhaust: free play an {unrest}."
            ],
            developmentCost: {progress: 1, material: 2, population: 1},
            victoryPoints: 2,
        });
    }
}
