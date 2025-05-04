import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PolynesiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POLYNESIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "POL1A",
            effectText: [
                "Passive: when a card would be put into your history, instead discard it and take a {unrest}.",
                "Exhaust: if {isle-bound}, pay 2{material} to gain 1 mana."
            ],
            exhaustCount: 3
        });
    }
}
