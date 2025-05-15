import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class UnspeakableWorship extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNSPEAKABLE_WORSHIP,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL18",
            effectText: [
                "Cannot be played unless [Unholy Shrine] is in play.",
                "Exhaust: choose: gain 1 action OR recall a {pinned}.",
                "Solstice: choose: pay 3{material} OR abandon this card."
            ],
            relatedCards: [
                CardName.UNHOLY_SHRINE
            ]
        });
    }
}
