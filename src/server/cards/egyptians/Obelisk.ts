import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Obelisk extends Card implements ICard {
    constructor() {
        super({
            name: CardName.OBELISK,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "EGY5",
            effectText: "Exhaust: free play an {unrest}.\n" +
                "Solstice: discard a card. Gain 1{progress}.",
            developmentCost: {material: 2, population: 2},
            victoryPoints: 2,
        });
    }
}
