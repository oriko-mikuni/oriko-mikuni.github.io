import {Card} from "../../Card";
import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";


import {CardLocation} from "../../../../common/cards/CardLocation";

export class Great extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREAT,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM2",
            effectText: [
                "Free play. Gain 1 action.",
                "You MAY put this card into your history."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "6VP if in history, 2VP otherwise"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 6 : 2;
    }
}
