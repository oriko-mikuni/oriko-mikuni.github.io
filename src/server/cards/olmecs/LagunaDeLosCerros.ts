import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class LagunaDeLosCerros extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LAGUNA_DE_LOS_CERROS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.OLM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "OLM16",
            effectText: [
                "Gain 1{population}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
