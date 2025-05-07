import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Shreni extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHRENI,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.GUP,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "GUP10",
            effectText: [
                "Exhaust: pay 2{material} to acquire a {uncivilised}/{civilised} with {goods} on it OR add 1{goods} to a card in the market and all players MAY gain 2{material}.",
                "Solstice: choose: abandon a {pinned} OR discard a card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
