import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";

export class Mercenaries extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MERCENARIES_H,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV13",
            effectText: [
                "Free play. Pay 1{population} to gain 1 action."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4{population}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.population / 4);
    }
}
