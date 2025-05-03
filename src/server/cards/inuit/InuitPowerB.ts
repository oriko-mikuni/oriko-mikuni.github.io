import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class InuitPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INUIT_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "INU1B",
            effectText: [
                "Passive: when you acquire or break through for a face-up {uncivilised}/{civilised} in the market, discard a card to gain 1{progress}.",
                "End of solstice: flip your state card."
            ],
            victoryPoints: 5,
        });
    }
}
