import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Crete extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CRETE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER, CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MIN18",
            effectText: cardEffectReuse.garrisonACard,
        });
    }
}
