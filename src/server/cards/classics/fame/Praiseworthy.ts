import {Card} from "../../Card";
import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {PlayerCardLocation} from "../../../Player";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Praiseworthy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PRAISEWORTHY,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1FAM1",
            effectText: [
                "Choose: put this card into your history OR break through for " + CardEffectReuse.fourSuits + "."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "7VP if in history, 3VP otherwise"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 7 : 3;
    }
}
