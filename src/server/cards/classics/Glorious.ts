import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Glorious extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORIOUS,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM5",
            effectText: [
                "Free play. If {barbarian}, draw up to 4 cards.",
                "If {empire}, develop at no cost.",
                cardEffectReuse.selfHistory,
            ],
            victoryPoints: 6,
        });
    }
}
