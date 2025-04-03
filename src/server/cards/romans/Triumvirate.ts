import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Triumvirate extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMVIRATE,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM18",
            effectText: "Break through for {uncivilised}.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
