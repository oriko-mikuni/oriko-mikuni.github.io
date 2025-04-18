import {Card} from "../../Card";
import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class AweInspiring extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AWE_INSPIRING,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardNumber: "1FAM8",
            effectText: [
                CardEffectReuse.increaseHandSize1
            ],
            victoryPoints: 7,
        });
    }
}
