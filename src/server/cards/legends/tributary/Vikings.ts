import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";

export class Vikings extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VIKINGS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "2TRI3",
            effectText: [
                "Gain 2{material}.",
                "Steal 2{material} from each other player.",
                "Anyone unable to pay takes {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {uncivilised} cards"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards(card =>
            card.card.suit.some(suit => suit === CardSuitIcon.UNCIVILISED)
        ).length / 2);
    }
}
