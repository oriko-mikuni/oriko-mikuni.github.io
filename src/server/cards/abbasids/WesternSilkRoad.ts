import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class WesternSilkRoad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WESTERN_SILK_ROAD_ABB,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "ABB12",
            effectText: [
                "Commerce: pay 2{material} to return a {unrest} and gain 1{progress}.",
                "Profit (3{goods}): draw 2 cards, if able. You MAY free play one of them."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
