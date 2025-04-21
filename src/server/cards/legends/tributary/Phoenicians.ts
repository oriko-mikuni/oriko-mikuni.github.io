import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Phoenicians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHOENICIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2TRI4",
            effectText: [
                "Acquire {civilised}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
