import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Warfare extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WARFARE,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3UNC5",
            effectText: [
                "Pay 3{population}. Each other player takes a {unrest}.",
                "Choose: break through for a {tributary} and gain 1{progress} OR break through for a {region} and each other player abandons a {region}."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 1,
        });
    }
}
