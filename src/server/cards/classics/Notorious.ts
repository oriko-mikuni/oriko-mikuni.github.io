import {Card} from "../Card";
import {ICard} from "../ICard";
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

    public getVictoryPoints(player: Player): number {
        let returnValue: number = 0;
        player.allOpponents().forEach(player =>
            returnValue += player.suitCount(CardSuitIcon.UNREST));
        return returnValue;
    }
}
