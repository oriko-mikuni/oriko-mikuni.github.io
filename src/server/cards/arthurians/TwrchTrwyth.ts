import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class TwrchTrwyth extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TWRCH_TRWYTH,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ART5",
            effectText: "Exhaust: pay 1{progress} to free play an {empire}.\n" +
                "Solstice: you MAY discard a {knight} to choose: " +
                "exile an impending quest (except [Graal]) OR " +
                "return up to 2 {unrest} from your\n" +
                "hand or discard.",
            victoryPoints: -4,
        });
    }
}
