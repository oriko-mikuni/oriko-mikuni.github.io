import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class CarolingianKingdom extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CAROLINGIAN_KINGDOM,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            cardNumber: "3TRI8",
            effectText: [
                "You MAY free play a {region}.",
                CardEffectReuse.knightGarrison
            ],
            victoryPoints: 3,
        });
    }
}
