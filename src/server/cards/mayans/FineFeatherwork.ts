import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class FineFeatherwork extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FINE_FEATHERWORK,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY11",
            effectText: [
                "Exhaust: you MAY put a {mask} from your hand or discard pile into your history.",
                "If you do, you MAY develop a [Headpiece] and add it to your hand."
            ],
        });
    }
}
