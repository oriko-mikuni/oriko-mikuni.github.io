import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GrandTrunkRoad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAND_TRUNK_ROAD,
            suit: [CardSuitIcon.REGION, CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU4",
            effectText: [
                "Passive: counts as two {region}.",
                "Exhaust: all players gain 1{material}, you gain 1{progress}."
            ],
            developmentCost: {material: 3, population: 3},
            victoryPoints: 2,
        });
    }
}
