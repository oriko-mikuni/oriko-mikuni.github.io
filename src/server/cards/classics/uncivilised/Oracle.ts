import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {Player} from "../../../Player";

export class Oracle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ORACLE_C,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            cardNumber: "1UNC9",
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
