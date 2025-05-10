import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GoldMerchants extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GOLD_MERCHANTS,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG20",
            effectText: [
                "Exhaust: pay 2{material}, spend 1 action, and garrison a card in a {region} you have in play with no other garrisoned cards to acquire a card with {material} on it.",
                "If {empire}, put this card into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
