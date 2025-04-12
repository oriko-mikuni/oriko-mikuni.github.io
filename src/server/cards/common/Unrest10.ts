import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Unrest10 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNREST10,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "UNR11",
            effectText: cardEffectReuse.unrest,
            playerCount: 4,
            victoryPoints: -2,
        });
    }
}
