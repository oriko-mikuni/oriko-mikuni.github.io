import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Conquer1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_CEL1,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CEL,
            cardNumber: "CEL17",
            effectText: CardEffectReuse.conquer
        });
    }
}
