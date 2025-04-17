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

export class Magadha extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAGADHA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU20",
            effectText: [
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
