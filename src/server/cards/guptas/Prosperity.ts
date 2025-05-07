import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_GUP,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.GUP,
            cardNumber: "GUP20",
            effectText: CardEffectReuse.prosperity,
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
