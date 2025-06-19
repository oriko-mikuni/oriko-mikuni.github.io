import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import { CardTypeIcon } from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class MerchantEmpire2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MERCHANT_EMPIRE2,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT, CardTypeIcon.PRODUCTION, CardTypeIcon.PRODUCTION],
            startingLocation: CardStartingLocation.IN_PLAY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MERC2B",
            effectText: [
                "Exhaust: choose: trade OR pay 3{goods} to acquire a {uncivilised}/{civilised} OR if there is no card garrisoned here, pay 5{goods} and garrison a {pinned} from your hand here to take the top {fame} card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            playerCount: 2,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {production} in play",
            relatedCards: [
                CardName.MERCHANT2
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countType(CardTypeIcon.PRODUCTION,
            param.player.selectCards(card => isInPlayLocation(card.location))
        ) / 2);
    }
}
