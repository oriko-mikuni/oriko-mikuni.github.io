import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";

export class Moneylender extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MONEYLENDER_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            cardNumber: "1CIV3",
            effectText: [
                "Free play. Pay 3{material} to gain 1 action."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 10{material}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.material / 10);
    }
}
