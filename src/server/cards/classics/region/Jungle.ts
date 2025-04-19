import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Jungle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JUNGLE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG2",
            effectText: [
                "Gain 1{population}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
            victoryPoints: 1,
        });
    }
}
