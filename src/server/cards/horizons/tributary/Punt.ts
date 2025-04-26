import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Punt extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PUNT,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            cardNumber: "3TRI6",
            effectText: [
                "Break through for a {trade-route}.",
                CardEffectReuse.selfHistory
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 3,
        });
    }
}
