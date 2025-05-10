import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ChanBuddhism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHAN_BUDDHISM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.TAN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAN13",
            effectText: [
                "Passive: reduce the cost in {material} or cards to play {unrest} by 1 (to a minimum of 1).",
                "Solstice: choose: pay 1{material} to return a {unrest} OR gain 1{material}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
