import {Card} from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Location} from "../../Player";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Proud1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROUD1,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM6",
            effectText: [
                cardEffectReuse.unplayable,
                cardEffectReuse.bumpUpTextBox,
                cardEffectReuse.bumpUpTextBox
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "12 VP if garrisoned, 8VP if in history, 3VP otherwise"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return !param.location.startsWith("location:") ? 12 :
            param.location === Location.HISTORY ? 8 : 3;
    }
}
