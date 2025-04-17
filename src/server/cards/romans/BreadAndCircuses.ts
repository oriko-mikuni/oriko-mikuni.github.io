import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class BreadAndCircuses extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BREAD_AND_CIRCUSES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ROM10",
            effectText: [
                "Solstice: discard a card. You MAY return an {unrest} from your hand. You MAY return an {unrest} from your discard pile."
            ],
        });
    }
}
