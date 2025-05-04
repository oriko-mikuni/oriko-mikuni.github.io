import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MartiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MARTIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MRT1B",
            effectText: [
                "Setup: gain 20{progress}.",
                "Exhaust: when you discard or exile a {gadget}, exhaust this card to gain 1{population} and 1{progress}."
            ],
        });
    }
}
