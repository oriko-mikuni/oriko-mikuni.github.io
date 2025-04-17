import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class EgyptianHieroglyphics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIAN_HIEROGLYPHICS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "EGY19",
            effectText: [
                "Solstice: you MAY put a card from your hand or discard pile into your history."
            ],
        });
    }
}
