import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Tyrrhenians extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TYRRHENIANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3TRI13",
            effectText: [
                "Free play.",
                "Each other player discards a card.",
                "You MAY garrison a card from your hand or discard pile in a {region}.",
                "If {empire}, free play a {region} and put this card into your history."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {attack}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card =>
            card.card.headerIcon === CardHeaderIcon.ATTACK
        ).length;
    }
}
