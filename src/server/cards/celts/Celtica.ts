import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Celtica extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTICA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CEL21",
            effectText: [
                "You MAY place a card of your choice from your discard pile on the top of your deck.",
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
