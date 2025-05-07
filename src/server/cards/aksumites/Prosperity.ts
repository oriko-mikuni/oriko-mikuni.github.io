import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_AKS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.AKS,
            cardNumber: "AKS19",
            effectText: CardEffectReuse.prosperity,
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
