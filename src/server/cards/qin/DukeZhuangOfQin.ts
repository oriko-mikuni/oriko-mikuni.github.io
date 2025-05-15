import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class DukeZhuangOfQin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DUKE_ZHUANG_OF_QIN,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN21",
            effectText: [
                "Cannot be played unless [Mandate of Heaven] is in play.",
                "Return up to 2 {unrest} from your hand or discard pile. Break through for {region}/{tributary}.",
                CardEffectReuse.selfHistory
            ],
            relatedCards: [
                CardName.MANDATE_OF_HEAVEN_QIN
            ]
        });
    }
}
