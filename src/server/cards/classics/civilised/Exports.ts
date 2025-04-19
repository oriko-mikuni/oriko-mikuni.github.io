import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Exports extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EXPORTS_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1CIV11",
            effectText: [
                "All players gain 2{material}.",
                "Give each other player a card from your hand or discard pile."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 10 cards"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards().length / 10);
    }
}
