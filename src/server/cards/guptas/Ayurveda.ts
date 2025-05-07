import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Ayurveda extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AYURVEDA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.GUP,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GUP14",
            effectText: [
                "Solstice: gain 1{population}. If {barbarian}, discard a card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
