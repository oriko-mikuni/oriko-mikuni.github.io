import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_GRE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE14",
            effectText: cardEffectReuse.glory,
        });
    }
}
