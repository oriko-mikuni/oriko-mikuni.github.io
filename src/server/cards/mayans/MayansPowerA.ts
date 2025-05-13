import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class MayansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAYANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MAY1A",
            effectText: [
                "Exhaust: discard a card to find a {mask} (not from your nation deck) and add it to your hand.",
                "Solstice: if you have at least 1 {city} in play, choose: discard a {mask} OR abandon a {city}."
            ],
        });
    }
}
