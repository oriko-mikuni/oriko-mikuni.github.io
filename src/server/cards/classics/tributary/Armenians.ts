import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Armenians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARMENIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI1",
            effectText: [
                "Acquire {uncivilised}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
