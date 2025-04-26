import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class UndecipherableScroll extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UNDECIPHERABLE_SCROLL,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.SCROLL],
            cardNumber: "3UNC2",
            effectText: [
                "Break through for an exiled " + CardEffectReuse.fourSuits + " and gain 1{progress}.",
                CardEffectReuse.selfExile
            ],
            victoryPoints: 1,
        });
    }
}
