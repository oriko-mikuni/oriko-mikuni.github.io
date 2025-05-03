import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class AdvancedMathematics extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCED_MATHEMATICS_MAY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY17",
            effectText: [
                CardEffectReuse.increaseHandSize1,
                "If you have zero cards in your hand at the beginning of your Clean-up step, gain 1{progress}."
            ],
        });
    }
}
