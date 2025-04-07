import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Chandragupta extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANDRAGUPTA,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU18",
            effectText: "Acquire {region}. Find an [Indian Elephants]\n" +
                "and put it in your discard pile.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
