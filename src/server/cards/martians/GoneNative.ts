import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GoneNative extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GONE_NATIVE,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "MRT29B",
        });
    }
}
