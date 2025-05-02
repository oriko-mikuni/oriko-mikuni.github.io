import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_PER,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.PER,
            cardNumber: "PER14",
            effectText: CardEffectReuse.glory,
        });
    }
}
