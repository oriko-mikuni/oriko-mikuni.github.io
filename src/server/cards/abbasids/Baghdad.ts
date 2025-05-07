import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Baghdad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BAGHDAD,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.METROPOLIS, CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ABB2",
            effectText: [
                "Solstice: choose: draw a card OR gain 1{goods}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
