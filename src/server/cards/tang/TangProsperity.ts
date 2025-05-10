import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class TangProsperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TANG_PROSPERITY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN21",
            effectText: [
                "All players MAY draw a card.",
                "Gain 1{material} per {production} you have in play.",
                "You MAY free play a {city}/{metropolis}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
