import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class CityOfTaysafun extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_TAYSAFUN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS9",
            effectText: [
                CardEffectReuse.tradingCity
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
