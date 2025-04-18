import {Card} from "../../Card";
import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Triumphant extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIUMPHANT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM6",
            effectText: [
                CardEffectReuse.unplayable,
                CardEffectReuse.cannotGarrison
            ],
            victoryPoints: 11,
        });
    }
}
