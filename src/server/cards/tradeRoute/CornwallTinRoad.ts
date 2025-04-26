import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class CornwallTinRoad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CORNWALL_TIN_ROAD,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO1",
            effectText: [
                "Commerce: choose: acquire a {uncivilised} OR draw a card from your discard pile.",
                "Profit (3{goods}): find any card (except in nation deck) and free play it."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {barbarian} ({uncivilised}/{region}/{tributary} only)"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card =>
            card.card.stateSymbol.some(state => state === CardStateIcon.BARBARIAN)
            && card.card.suit.some(suit =>
                suit === CardSuitIcon.UNCIVILISED ||
                suit === CardSuitIcon.REGION ||
                suit === CardSuitIcon.TRIBUTARY)
        ).length;
    }
}
