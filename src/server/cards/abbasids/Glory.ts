import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_ABB,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ABB,
            cardNumber: "ABB9",
            effectText: CardEffectReuse.glory,
            expansion: CardExpansion.TRADE_FRIENDLY,
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
