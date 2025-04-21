import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Carthaginians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTHAGINIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2TRI7",
            effectText: [
                "Gain 2{material} and draw a card.",
                "Give each other player a card from your hand or discard pile."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 10{material}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.material / 10);
    }
}
