import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST3,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR4",
            effectText: cardEffectReuse.unrest,
            victoryPoints: -2,
        });
    }
}
