import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest0 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST0,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR1",
            effectText: cardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
