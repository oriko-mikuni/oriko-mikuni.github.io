import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class MythsAndLegends extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MYTHS_AND_LEGENDS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ATL,
            cardNumber: "ATL7",
            effectText: [
                "Sink a {region} in play to look at the top 2 cards of the {fame} deck.",
                "Take one of those cards.",
                "Gain 1{progress}.",
            ],
            developmentCost: {progress: 2},
            victoryPoints: 2,
        });
    }
}
