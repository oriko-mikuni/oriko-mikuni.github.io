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

export class CityOfKoumbiSaleh extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_KOUMBI_SALEH,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG2",
            effectText: [
                CardEffectReuse.tradingCity
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
