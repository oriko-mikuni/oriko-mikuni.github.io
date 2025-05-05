import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Summoned extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SUMMONED_CUL,
            suit: [],
            stateSymbol: [CardStateIcon.SUMMONED],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "CUL30B",
            effectText: [
                "Solstice: you MAY put a card from your hand into your history.",
                "Exile all cards (except {unrest} and {summoned}) from your hand.",
                "For each card exiled this way, draw a card and choose: return a {unrest} OR gain 1{progress}."
            ],
            victoryPoints: 5,
        });
    }
}
