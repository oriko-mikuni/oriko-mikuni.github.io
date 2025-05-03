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

export class Nunavut extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NUNAVUT,
            suit: [CardSuitIcon.REGION, CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.HUNT, CardTypeIcon.PRODUCTION, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU2",
            effectText: [
                "Choose: gain 1{material} OR gain 1{population}.",
                CardEffectReuse.garrisonACard,
                "Passive: counts as 2 {region}."
            ],
        });
    }
}
