import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {KeywordNames} from "../../../../common/keywords";

export class SacredPass extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SACRED_PASS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG14",
            effectText: [
                "Exhaust: you MAY look at the top card of your nation deck. You MAY then abandon this card to swap a card from your hand with the top of your nation deck."
            ],
            victoryPoints: 1,
            keywords: [
                KeywordNames.look,
                KeywordNames.sacredPass
            ]
        });
    }
}
