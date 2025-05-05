import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class LureOfDecadence extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LURE_OF_DECADENCE,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL16",
            effectText: [
                "Each other player abandons a {pinned}.",
                "You MAY recall a {pinned} to take a {unrest}.",
                "You MAY garrison a card from your hand or discard pile in your ceremony card."
            ],
        });
    }
}
