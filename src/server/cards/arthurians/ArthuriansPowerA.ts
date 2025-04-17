import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ArthuriansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARTHURIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ART1A",
            effectText: [
                "Exhaust: discard a card to draw a {knight} from your discard pile.",
                "Solstice: discard a card and gain 1{progress}."
            ],
        });
    }
}
