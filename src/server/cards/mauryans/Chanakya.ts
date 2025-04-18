import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Chanakya extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANAKYA,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU19",
            effectText: [
                "Choose: acquire {uncivilised} and acquire {civilised} OR find [Arthashastra] and put it in your discard pile.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
