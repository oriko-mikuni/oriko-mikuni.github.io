import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Goryeo extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GORYEO,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI3",
            effectText: [
                "Acquire a {civilised}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 3,
        });
    }
}
