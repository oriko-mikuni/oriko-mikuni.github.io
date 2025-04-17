import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Advance extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_EGY,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY17",
            effectText: [
                CardEffectReuse.advance
            ]
        });
    }
}
