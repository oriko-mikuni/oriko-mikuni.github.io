import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Cape extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CAPE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG12",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
                "Passive: you MAY recall this to avoid the effect of an {attack}."
            ],
        });
    }
}
