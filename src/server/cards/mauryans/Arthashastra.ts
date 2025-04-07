import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Arthashastra extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARTHASHASTRA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU9",
            effectText: "Solstice: discard any number of {unrest}.\n" +
                "For each card discarded, choose:\n" +
                "draw a card OR gain 1{progress}.",
        });
    }
}
