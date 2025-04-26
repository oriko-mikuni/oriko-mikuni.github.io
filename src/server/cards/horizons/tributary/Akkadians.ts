import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {Player} from "../../../Player";

export class Akkadians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AKKADIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI4",
            effectText: [
                "Gain 1{goods}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards());
    }
}
