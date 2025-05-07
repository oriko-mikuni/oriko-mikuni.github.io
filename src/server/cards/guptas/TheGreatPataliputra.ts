import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class TheGreatPataliputra extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THE_GREAT_PATALIPUTRA,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.GUP,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GUP21",
            effectText: [
                CardEffectReuse.tradingCity
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
