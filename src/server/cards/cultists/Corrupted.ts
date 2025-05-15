import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Corrupted extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CORRUPTED_CUL,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "CUL30A",
            effectText: [
                "Passive: when any other player would take a {unrest} during your turn, you MAY instead force them to take a [Chaos] and put it in their discard pile."
            ],
            relatedCards: [
                CardName.SUMMONED_CUL
            ]
        });
    }
}
