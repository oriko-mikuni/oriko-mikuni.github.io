import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest7 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST7,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR8",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
