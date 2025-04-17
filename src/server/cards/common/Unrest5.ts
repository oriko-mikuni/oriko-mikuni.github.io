import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest5 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST5,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR6",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
