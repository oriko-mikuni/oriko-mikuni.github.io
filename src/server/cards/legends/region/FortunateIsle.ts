import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class FortunateIsle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FORTUNATE_ISLE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            cardNumber: "2REG1",
            effectText: [
                "Acquire " + CardEffectReuse.fourSuits + ".",
                CardEffectReuse.selfExile
            ],
            victoryPoints: 2,
        });
    }
}
