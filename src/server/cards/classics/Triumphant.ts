import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Triumphant extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMPHANT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM6",
            effectText: cardEffectReuse.unplayable + "\nCannot be garrisoned.",
            victoryPoints: 11,
        });
    }
}
