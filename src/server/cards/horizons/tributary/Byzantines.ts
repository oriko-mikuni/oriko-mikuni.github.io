import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Byzantines extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BYZANTINES,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3TRI5",
            effectText: [
                "Break through for a {tributary}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
