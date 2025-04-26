import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {Player} from "../../../Player";

export class KhmerEmpire extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KHMER_EMPIRE,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3TRI9",
            effectText: [
                "Break through for a {region}.",
                "You MAY free play a {river}.",
                "You MAY return a {unrest}.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4 {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.REGION, param.player.selectCards()) / 4);
    }
}
