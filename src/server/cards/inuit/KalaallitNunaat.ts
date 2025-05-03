import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class KalaallitNunaat extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KALAALLIT_NUNAAT,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU5",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
            ],
        });
    }
}
