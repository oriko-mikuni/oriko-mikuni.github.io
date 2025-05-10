import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Aban extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ABAN,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.SAS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "SAS23",
            effectText: [
                "Exhaust: you MAY pay 1{material} to draw a {knight} or {region} from your discard pile.",
                "Solstice: choose: abandon a garrisoned {knight} OR recall a {region} with {river}/{ocean} OR abandon this card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
