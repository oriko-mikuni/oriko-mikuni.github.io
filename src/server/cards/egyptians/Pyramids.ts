import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Pyramids extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PYRAMIDS,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "EGY9",
            effectText: [
                "Passive: reduce the cost in {material} or cards to play an {unrest} by 1 (to a minimum of 1).",
                "Exhaust: draw a card."
            ],
            developmentCost: {material: 2, population: 3},
            victoryPoints: 4,
        });
    }
}
