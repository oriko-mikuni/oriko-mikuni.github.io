import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CityOfSparta extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_SPARTA,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GRE19",
            effectText: [
                CardEffectReuse.city
            ],
        });
    }
}
