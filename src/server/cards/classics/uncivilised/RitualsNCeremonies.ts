import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";

export class RitualsNCeremonies extends Card implements ICard {
    constructor() {
        super({
            name: CardName.RITUALS_N_CEREMONIES_C,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            cardNumber: "1UNC13",
            effectText: [
                "Free play. Choose: return an {unrest} OR gain 1{progress} and you MAY return an {exhaust} to your state card."
            ],
            playerCount: 3,
            victoryPoints: 1,
        });
    }
}
