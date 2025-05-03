import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Nunatsiavut extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NUNATSIAVUT,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU4",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
            ],
        });
    }
}
