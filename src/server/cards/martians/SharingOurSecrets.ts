import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class SharingOurSecrets extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHARING_OUR_SECRETS,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT17",
            effectText: [
                "Exhaust: swap a {gadget} from your hand with a matching suited card (not a {gadget}) in the market.",
                "Passive: when another player plays a {gadget}, choose: convert 1{progress} into 1{population} and draw a card OR gain 1{progress}."
            ],
        });
    }
}
