import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {Player} from "../../../Player";

export class Egyptians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "1TRI3",
            effectText: [
                "If {barbarian}, put the top card of your nation deck into your discard pile.",
                "If {empire}, develop.",
                CardEffectReuse.selfHistory
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {civilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards());
    }
}
