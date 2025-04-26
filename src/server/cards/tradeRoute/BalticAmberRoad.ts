import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class BalticAmberRoad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BALTIC_AMBER_ROAD,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO4",
            effectText: [
                "Commerce: if {barbarian}, free play a {unrest}; if {empire}, pay 2{material} to gain 2{progress}.",
                "Profit (3{goods}): break through for a {tributary}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
