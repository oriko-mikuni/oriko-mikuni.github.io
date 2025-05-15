import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class FreeTribesF extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FREE_TRIBES_F,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "TAI24B",
            effectText: [
                "Passive: resources on your cards count for scoring purposes."
            ],
            keywords: [
                KeywordNames.freeTribes
            ],
            relatedCards: [
                CardName.FREE_TRIBES
            ]
        });
    }
}
