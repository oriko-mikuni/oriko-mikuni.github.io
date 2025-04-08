import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class DukeZhuangOfQin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DUKE_ZHUANG_OF_QIN,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN21",
            effectText: "Cannot be played unless [Mandate of Heaven] is in play.\n" +
                "Return up to 2 {unrest} from your hand or discard pile. " +
                "break through for {region}/{tributary}.\n" +
                cardEffectReuse.selfHistory,
        });
    }
}
