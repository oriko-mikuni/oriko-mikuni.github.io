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

export class SikuSeaIce extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SIKU_SEA_ICE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU3",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
                "Passive: when your state card is flipped to [Summer], recall this card and gain 1{material}."
            ],
            relatedCards: [
                CardName.SUMMER_INU
            ]
        });
    }
}
