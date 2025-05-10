import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class BerberTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BERBER_TRADERS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardNumber: "WAG10",
            effectText: [
                "You MAY return 1 {exhaust} from a {merchant} you have in play to your state card.",
                "You MAY gain all resources from a card in the market."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
