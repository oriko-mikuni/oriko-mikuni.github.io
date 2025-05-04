import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Advance extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_POL,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            nationColour: CardNationColour.POL,
            cardNumber: "POL24",
            effectText: [
                CardEffectReuse.advance
            ],
        });
    }
}
