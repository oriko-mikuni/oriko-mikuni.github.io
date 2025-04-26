import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Merchant3 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MERCHANT3,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            startingLocation: CardStartingLocation.IN_PLAY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MERC3A",
            effectText: [
                "Exhaust: choose: acquire a {trade-route} and exile a card from the market OR trade OR pay 3{goods} to flip this card ({exhaust} stays)."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            playerCount: 3,
        });
    }
}
