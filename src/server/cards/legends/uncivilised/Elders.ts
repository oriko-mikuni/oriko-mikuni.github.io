import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";

export class Elders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ELDERS_L,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2UNC3",
            effectText: [
                "Choose: acquire {uncivilised} OR break through for {uncivilised} and all other players gain 1{progress}."
            ],
            victoryPoints: 1,
        });
    }
}
