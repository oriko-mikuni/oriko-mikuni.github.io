import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class BritanniaSecunda extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BRITANNIA_SECUNDA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.ART,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ART22",
            effectText: [
                "Draw a card.",
                CardEffectReuse.garrisonACard
            ],
        });
    }
}
