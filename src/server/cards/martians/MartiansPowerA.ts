import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MartiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MARTIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MRT1A",
            effectText: [
                "Setup: gain 25{progress}.",
                "Passive: when you gain {progress} from a {gadget} or market acquisition, you MAY discard a card to gain 1 fewer {progress}. You MAY ignore {progress} gain effects from other sources."
            ],
        });
    }
}
