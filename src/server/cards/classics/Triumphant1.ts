import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Triumphant1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMPHANT1,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM7",
            effectText: cardEffectReuse.unplayable + "\nCannot be garrisoned.",
            victoryPoints: 11,
        });
    }
}
