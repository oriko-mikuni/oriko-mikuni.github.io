import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";

export class Minoans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MINOANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            cardNumber: "1TRI9",
            effectText: [
                "Free play. Place a card on top of your deck and gain 2{progress}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4{progress}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.progress / 4);
    }
}
