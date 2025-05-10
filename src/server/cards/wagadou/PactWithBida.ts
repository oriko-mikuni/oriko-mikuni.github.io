import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class PactWithBida extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PACT_WITH_BIDA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG17",
            effectText: [
                "Free play.",
                CardEffectReuse.increaseHandSize1,
                "Exhaust: choose: draw a card from your discard pile OR gain 1 action.",
                "Solstice: choose: take 2 {unrest} OR abandon a {region} with at least 1 garrisoned card to gain 1{progress}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
