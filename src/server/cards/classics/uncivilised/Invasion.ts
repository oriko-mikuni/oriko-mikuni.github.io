import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Invasion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INVASION_C,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1UNC7",
            effectText: [
                "Pay 3{material}. All other players take {unrest}.",
                "Choose: break through for {tributary} OR break through for {region} and each other player recalls a {region}."
            ],
            victoryPoints: 1,
        });
    }
}
