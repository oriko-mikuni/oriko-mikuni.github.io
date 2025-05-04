import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Whakapapa extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WHAKAPAPA,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL23",
            effectText: [
                "Passive: when you put 1 or more cards into legends, you MAY pay 3{material} to return a {unrest}.",
                "Solstice: if {isle-bound}, draw a card. If {voyaging}, you MAY gain 1 mana from your discard pile."
            ],
        });
    }
}
