import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Thera extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THERA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MIN17",
            effectText: [
                "Gain 1{progress}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
