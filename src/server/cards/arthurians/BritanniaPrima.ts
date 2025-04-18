import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class BritanniaPrima extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BRITANNIA_PRIMA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ART21",
            effectText: [
                "Draw a card.",
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
