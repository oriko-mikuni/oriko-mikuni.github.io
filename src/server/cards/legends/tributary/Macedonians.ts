import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {Player} from "../../../Player";

export class Macedonians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MACEDONIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2TRI10",
            effectText: [
                "Acquire {region} twice (including from exiled cards).",
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
