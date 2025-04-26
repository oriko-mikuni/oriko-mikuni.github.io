import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Canny extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CANNY,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3FAM5",
            effectText: [
                "Acquire up to 2 exiled " + CardEffectReuse.fourSuits + ".",
                "Remember that when you acquire anything other than a {region}, you must take a {unrest}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 6,
        });
    }
}
