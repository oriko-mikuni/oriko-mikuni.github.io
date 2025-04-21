import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Chandragupta extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANDRAGUPTA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU18",
            effectText: [
                "Acquire {region}. Find an [Indian Elephants] and put it in your discard pile.",
                CardEffectReuse.selfHistory
            ],
        });
    }
}
