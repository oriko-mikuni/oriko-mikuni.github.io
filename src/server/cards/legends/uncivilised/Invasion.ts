import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Invasion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INVASION_L,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2UNC5",
            effectText: [
                "Pay 3{material}. Each other player takes {unrest}.",
                "Choose: break through for {tributary} OR break through for {region} and each other player recalls a {region}."
            ],
            victoryPoints: 1,
        });
    }
}
