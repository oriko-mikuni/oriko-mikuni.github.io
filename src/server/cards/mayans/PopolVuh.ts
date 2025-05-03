import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PopolVuh extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POPOL_VUH,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY4",
            effectText: [
                "Exhaust: discard a {mask} (not [Stone Mask]), spend 1 action, and return 2 {unrest} garrisoned here to take the top {fame} card.",
                "Solstice: you MAY pay any amount of {material} to garrison an equal number of {unrest} here."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 4,
        });
    }
}
