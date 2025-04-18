import {Card} from "../../Card";
import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Triumphant1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMPHANT1,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM7",
            effectText: [
                CardEffectReuse.unplayable,
                CardEffectReuse.cannotGarrison
            ],
            victoryPoints: 11,
        });
    }
}
