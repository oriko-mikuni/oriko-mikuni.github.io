import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Sumerians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SUMERIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI7",
            effectText: [
                CardEffectReuse.unplayable
            ],
            victoryPoints: 3,
            victoryPointsString: "Return up to 2 {unrest} before scoring"
        });
    }
}
