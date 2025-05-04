import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class LandingSite extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LANDING_SITE,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT24",
            effectText: [
                "Look at the top 2 cards of your nation deck. You MAY swap a card (not a {unrest}) from your hand with one of them."
            ],
        });
    }
}
