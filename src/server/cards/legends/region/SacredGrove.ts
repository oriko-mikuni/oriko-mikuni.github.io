import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class SacredGrove extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SACRED_GROVE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "2REG7",
            effectText: [
                "Gain 1{progress}. You MAY put a card from your hand into your history.",
                CardEffectReuse.selfHistory
            ],
            playerCount: 3,
            victoryPoints: 'variable',
            victoryPointsString: "2VP per player with fewer {progress} than you"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.allOpponents().filter(opponent =>
            opponent.scoringResources().progress < param.scoringResources.progress
        ).length * 2;
    }
}
