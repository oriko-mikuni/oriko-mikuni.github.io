import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class BloodOath extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BLOOD_OATH,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAG14",
            effectText: [
                "Exhaust: when you return a {unrest}, exhaust this card to draw a card.",
                "Passive: when you take a {unrest}, look at the top card of your nation deck. You MAY place it at the bottom of your nation deck."
            ],
        });
    }
}
