import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_SAS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS18",
            effectText: CardEffectReuse.prosperity,
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
