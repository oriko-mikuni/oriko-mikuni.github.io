import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Mauretania extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAURETANIA,
            suit: [CardSuitIcon.REGION],
            headerIcon: CardHeaderIcon.PINNED,
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CAR21",
            effectText: [
                "Gain 2{material}.",
                cardEffectReuse.garrisonACard
            ],
        });
    }
}
