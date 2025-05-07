import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_ABB,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB16",
            effectText: CardEffectReuse.prosperity,
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
