import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Arachosia extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ARACHOSIA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.RIVER],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.PER,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "PER10",
            effectText: "You MAY put a card from your discard\n" +
                "pile into your history.\n" +
                "You MAY garrison a card.",
        });
    }
}
