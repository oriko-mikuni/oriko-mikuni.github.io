import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Ionians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IONIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI4",
            effectText: [
                "Free play. Return up to 2 {unrest} from your hand or discard pile.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
