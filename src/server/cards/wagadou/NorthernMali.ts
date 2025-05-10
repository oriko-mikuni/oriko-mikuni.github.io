import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class NorthernMali extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NORTHERN_MALI,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG19",
            effectText: [
                CardEffectReuse.garrisonACard,
                "Gain 1{population}.",
                "Look at the top card of your nation deck, then you MAY shuffle the nation deck."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
