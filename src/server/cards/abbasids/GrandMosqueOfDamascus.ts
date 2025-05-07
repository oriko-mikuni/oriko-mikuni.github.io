import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GrandMosqueOfDamascus extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAND_MOSQUE_OF_DAMASCUS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ABB14",
            effectText: [
                "Solstice: choose: gain 1{population} per {city}/{metropolis} you have in play OR return a {unrest} from your discard pile."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
