import {Card} from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {Player} from "../../Player";

export class Notorious extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOTORIOUS,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1FAM3",
            effectText: "Free play. Steal 1 {progress} from each other player. Anyone unable to pay takes {unrest}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {unrest} scored by other players"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.allOpponents().reduce(
            (points: number, opponent: Player): number =>
                points + Player.countSuit(CardSuitIcon.UNREST, opponent.selectCards(true)),
            0);
    }
}
