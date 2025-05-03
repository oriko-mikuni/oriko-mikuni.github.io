import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Advance extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_INU,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.INU,
            cardNumber: "INU6",
            effectText: [
                CardEffectReuse.advance
            ],
        });
    }
}
