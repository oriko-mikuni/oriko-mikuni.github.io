import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class SaltMerchants extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SALT_MERCHANTS,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG9",
            effectText: [
                "Exhaust: garrison a card in a {region} you have in play to add 1{goods} to a card in the market.",
                "If you do, you MAY pay 1{progress} to trade."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
