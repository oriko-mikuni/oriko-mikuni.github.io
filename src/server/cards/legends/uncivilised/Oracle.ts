import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {Player} from "../../../Player";

export class Oracle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ORACLE_L,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            cardNumber: "2UNC9",
            effectText: [
                "Free play. Draw 2 cards and discard one of them."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {fame}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards()) * 2;
    }
}
