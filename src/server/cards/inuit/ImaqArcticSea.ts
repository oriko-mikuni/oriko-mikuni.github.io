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

export class ImaqArcticSea extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IMAQ_ARCTIC_SEA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "INU12",
            developmentCost: {material: 1},
            victoryPoints: 1,
        });
    }
}
