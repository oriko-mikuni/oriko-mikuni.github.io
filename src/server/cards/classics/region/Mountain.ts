import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Mountain extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MOUNTAIN_C,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG3",
            effectText: [
                "Gain 3{material}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
            victoryPoints: 1,
        });
    }
}
