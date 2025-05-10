import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Pride extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PRIDE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.WAG,
            cardNumber: "WAG21",
            effectText: [
                CardEffectReuse.thisCannotGarrison,
                "Pay 4{goods} and put a {region} with {fertile}/{river} you have in play into your history to take the top {fame} card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
