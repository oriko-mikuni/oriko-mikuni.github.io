import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class IsleBound extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ISLE_BOUND,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND, CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "POL29A",
            effectText: [
                "Solstice: choose: gain 1 mana from your hand or discard pile OR discard 1 mana to gain 1{goods}."
            ],
        });
    }
}
