import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Thule extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THULE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ATL16",
            effectText: [
                "Gain 1{population}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
