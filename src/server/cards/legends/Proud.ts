import {Card} from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Location} from "../../Player";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Proud extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROUD,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM5",
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
        return !param.location.startsWith("location:") ? 12 :
            param.location === Location.HISTORY ? 8 : 3;
    }
}
