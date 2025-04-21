import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {Player} from "../../../Player";

export class Xiongnu extends Card implements ICard {
    constructor() {
        super({
            name: CardName.XIONGNU,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2TRI11",
            effectText: [
                "Steal 1{progress} from each other player."
            ],
            playerCount: 4,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fame}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards());
    }
}
