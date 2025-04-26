import {Card} from "../../Card";
import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {isPlayerLocation, PlayerCardLocation} from "../../../Player";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Proud1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROUD1,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM6",
            effectText: [
                CardEffectReuse.unplayable,
                CardEffectReuse.bumpUpTextBox,
                CardEffectReuse.bumpUpTextBox
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "12 VP if garrisoned, 8VP if in history, 3VP otherwise"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return !isPlayerLocation(param.location) ? 12 :
            param.location === PlayerCardLocation.HISTORY ? 8 : 3;
    }
}
