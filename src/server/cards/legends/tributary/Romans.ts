import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Romans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2TRI5",
            effectText: [
                "Abandon a {region} to draw the top {fame} card.",
                CardEffectReuse.selfExile,
                "All other players gain 1{progress}."
            ],
            playerCount: 3,
            victoryPoints: 3,
        });
    }
}
