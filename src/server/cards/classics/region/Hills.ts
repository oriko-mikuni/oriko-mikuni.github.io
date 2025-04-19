import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Hills extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HILLS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG8",
            effectText: [
                "Gain 1{population}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
