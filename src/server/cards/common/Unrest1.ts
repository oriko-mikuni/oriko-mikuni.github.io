import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST1,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR2",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
