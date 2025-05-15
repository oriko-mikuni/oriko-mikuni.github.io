import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class EmperorTaizong extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EMPEROR_TAIZONG,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN22",
            effectText: [
                "Cannot be played unless [Mandate of Heaven] is in play.",
                "Take a {unrest} to acquire a {region} twice.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            relatedCards: [
                CardName.MANDATE_OF_HEAVEN_TAN
            ]
        });
    }
}
