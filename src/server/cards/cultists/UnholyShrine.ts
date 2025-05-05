import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class UnholyShrine extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNHOLY_SHRINE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL8",
            effectText: [
                "Exhaust: choose: pay 1{population} to gain 1{progress} OR exile a card from the market and gain 1{population}.",
                "Solstice: choose: discard a card OR gain 3{material} and abandon this card."
            ],
        });
    }
}
