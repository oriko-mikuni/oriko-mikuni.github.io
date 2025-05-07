import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Sarthavaha extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SARTHAVAHA,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.GUP,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GUP11",
            effectText: [
                "Exhaust: pay 1{goods} to trade."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
