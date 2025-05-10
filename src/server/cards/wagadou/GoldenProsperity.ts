import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class GoldenProsperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GOLDEN_PROSPERITY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardNumber: "WAG13",
            effectText: [
                "Each player MAY draw a card.",
                "Gain 1{material} per {production}/{trade-route}/{merchant} you have in play.",
                "For each {region} you have in play, you MAY pay 2{material} to gain 1{population}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
