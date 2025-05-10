import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Atar extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATAR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS11",
            effectText: [
                "Exhaust: garrison a {unrest} here.",
                "Solstice: choose: abandon this card OR if {barbarian} and 1+ {unrest} is garrisoned here, pay 1{material} to return one of them OR if {empire}, put a {knight}/{tributary} from your hand or discard pile into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
