import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Caracol extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARACOL,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY21",
            effectText: [
                "Exhaust: choose: draw a {mask} from your discard pile OR gain 1{population} OR gain 1{material}."
            ],
        });
    }
}
