import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest8 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST8,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR9",
            effectText: cardEffectReuse.unrest,
            playerCount: 3,
            victoryPoints: -2,
        });
    }
}
