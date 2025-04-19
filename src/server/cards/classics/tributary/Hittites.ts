import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Hittites extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HITTITES,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI11",
            effectText: [
                "Break through for {region}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
