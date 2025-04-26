import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {Player} from "../../Player";

export class MediterraneanCircle extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MEDITERRANEAN_CIRCLE,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "3TRO9",
            effectText: [
                "Commerce: choose: resolve the Commerce effect of a {trade-route} any player other than you has in play OR free play a {trade-route} from your discard pile.",
                "Profit (3{goods}): draw 3 cards. You MAY put up to 2 cards from your hand into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            playerCount: 3,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {ocean}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.OCEAN, param.player.selectCards());
    }
}
