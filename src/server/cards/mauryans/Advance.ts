import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Advance extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_MAU,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU17",
            effectText: cardEffectReuse.advance,
        });
    }
}
