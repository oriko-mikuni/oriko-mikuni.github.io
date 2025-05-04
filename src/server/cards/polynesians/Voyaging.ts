import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Voyaging extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VOYAGING,
            suit: [],
            stateSymbol: [CardStateIcon.VOYAGING, CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "POL29B",
            effectText: [
                "Passive: you cannot draw cards from your deck. Cards gained via acquiring or breaking through (excluding {unrest}) are added into your discard pile instead of your hand. When you play {region} with {ocean}, gain 1{progress} and flip this card.",
                "End of solstice: you MAY discard your hand to flip this card then draw a card."
            ],
        });
    }
}
