import {Card} from "../../Card";
import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {Location} from "../../../Player";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Imperial extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IMPERIAL,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2FAM1",
            effectText: [
                "Choose: break through for " + CardEffectReuse.fourSuits + " (you MAY choose an exiled card) OR put this card into your history."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "8VP if in history, 2VP otherwise"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 8 : 2;
    }
}
