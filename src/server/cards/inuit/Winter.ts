import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Winter extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WINTER_INU,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "INU25B",
            effectText: [
                "Passive: when a card would be put into your history, discard it instead and take a {unrest}.",
                "Passive: you can play {barbarian} cards.",
                "You cannot play nor develop {empire} cards."
            ],
        });
    }
}
