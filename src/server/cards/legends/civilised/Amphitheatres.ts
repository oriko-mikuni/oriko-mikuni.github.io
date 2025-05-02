import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Amphitheatres extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AMPHITHEATRE,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2CIV14",
            effectText: [
                "Exhaust: return an {unrest} from your discard pile to gain 1{progress}.",
                "Solstice: discard a card."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 5{progress}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.progress / 4);
    }
}
