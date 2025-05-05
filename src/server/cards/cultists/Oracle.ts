import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class Oracle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ORACLE_CUL,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL17",
            effectText: [
                "Free play. Draw 2 cards and discard one of them."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {fame}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards()) * 2;
    }
}
