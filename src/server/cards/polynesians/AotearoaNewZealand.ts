import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class AotearoaNewZealand extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AOTEAROA_NEW_ZEALAND,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.VOYAGING],
            typeIcon: [CardTypeIcon.FERTILE, CardTypeIcon.HUNT, CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL4",
            effectText: [
                "Take the top {fame} card when developed."
            ],
            developmentCostString: [
                "Development cost: Put 1 mana into legends. [Cannot be developed unless it is the last card in the development area]",
            ],
            victoryPoints: 3,
        });
    }
}
