import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Rebellion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.REBELLION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN24",
            effectText: [
                CardEffectReuse.thisCannotGarrison,
                "Abandon 4 {city}/{metropolis}/{region} to look at the top 3 cards of the {fame} deck.",
                CardEffectReuse.takeOne,
                "For each {metropolis} abandoned this way, gain 2{material}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
