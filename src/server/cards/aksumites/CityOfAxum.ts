import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CityOfAxum extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_AXUM,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "AKS14",
            effectText: [
                CardEffectReuse.city
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
