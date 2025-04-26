import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class MelayuKingdom extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MELAYU_KINGDOM,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI1",
            effectText: [
                "Break through for a {region}.",
                "You MAY free play a {ocean}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
