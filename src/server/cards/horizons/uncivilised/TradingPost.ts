import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardExpansion} from "../../../../common/cards/CardExpansion";
import {Player} from "../../../Player";

export class TradingPost extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRADING_POST,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.CITY, CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC7",
            effectText: [
                "Exhaust: recall a {river} to choose: trade OR gain 1{goods}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {river}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.RIVER, param.player.selectCards()) * 2;
    }
}
