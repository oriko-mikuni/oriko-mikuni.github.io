import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PokTaPok extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POK_TA_POK,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY19",
            effectText: [
                "Exhaust: discard 2 {mask} and spend 1 action to acquire a {uncivilised}.",
                "If at least one of the discarded cards was not a [Stone Mask], you MAY acquire a {civilised} instead."
            ],
        });
    }
}
