import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {Player} from "../../../Player";

export class Aksumites extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AKSUMITES,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI8",
            effectText: [
                "Gain 4{material}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.TRIBUTARY, param.player.selectCards());
    }
}
