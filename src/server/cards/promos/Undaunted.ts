import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {Player} from "../../Player";

export class Undaunted extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROMO_UNDAUNTED,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "0FAM1",
            effectText: [
                "Free play. You MAY acquire a {uncivilised}/{region}.",
                "You MAY take a {unrest} to steal 1{progress} from each other player."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {unrest}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNREST, param.player.selectCards()) * 2;
    }
}
