import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CityOfRome extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_ROME,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ROM19",
            effectText: [
                CardEffectReuse.city
            ],
        });
    }
}
