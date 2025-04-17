import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class WritingSystems extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WRITING_SYSTEMS_QIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN13",
            effectText: [
                "Exhaust: put a card from your discard pile into your history to draw a card."
            ],
        });
    }
}
