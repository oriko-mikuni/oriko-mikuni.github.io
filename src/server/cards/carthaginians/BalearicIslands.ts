import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class BalearicIslands extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BALEARIC_ISLANDS,
            suit: [CardSuitIcon.REGION],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR20",
            effectText: [
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
