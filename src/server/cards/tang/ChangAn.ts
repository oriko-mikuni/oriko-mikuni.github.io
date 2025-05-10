import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class ChangAn extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANG_AN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN19",
            effectText: [
                CardEffectReuse.metropolis
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
