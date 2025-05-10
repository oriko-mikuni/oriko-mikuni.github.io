import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Huzistan extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HUZISTAN,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.RIVER, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS17",
            effectText: [
                "Look at the top {fame} card. You MAY place it at the bottom of the {fame} deck.",
                CardEffectReuse.garrisonACard
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
