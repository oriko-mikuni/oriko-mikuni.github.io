import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {Player} from "../../Player";

export class Notorious extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOTORIOUS_NEW,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1FAM3X",
            effectText: "Free play. You MAY draw a card.\n" +
                "Steal 1 {progress} from each other player.\n" +
                "Anyone unable to pay takes {unrest}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {attack}"
        });
    }
    public getVictoryPoints(player: Player): number {
        return player.cardCount((card) => card.headerIcon === CardHeaderIcon.ATTACK);
    }
}
