import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Location} from "../../../Player";

export class Town1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TOWN1,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC5",
            effectText: [
                "Exhaust: all players MAY gain 2{material}.",
                "Solstice: you MAY gain 2{progress}. If you do, choose: abandon this card OR put it into your history."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 2 : 0;
    }
}
