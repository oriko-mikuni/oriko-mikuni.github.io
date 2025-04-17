import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Unrest4 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST4,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR5",
            effectText: [
                CardEffectReuse.unrest
            ],
            victoryPoints: -2,
        });
    }
}
