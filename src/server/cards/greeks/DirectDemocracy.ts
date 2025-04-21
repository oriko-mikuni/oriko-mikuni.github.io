import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class DirectDemocracy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DIRECT_DEMOCRACY,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GRE8",
            effectText: [
                "Passive: reduce the cost in {material} or cards to play an {unrest} by 1 (to a minimum of 1).",
                "Exhaust: free play an {unrest}."
            ],
            developmentCost: {material: 3, population: 2},
            victoryPoints: 3,
        });
    }
}
