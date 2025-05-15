import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Summer extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SUMMER_INU,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.STATE,
            cardNumber: "INU25A",
            effectText: [
                "Passive: when a card would be put into your history, discard it instead.",
                "Passive: you can play {empire} cards.",
                "You cannot play nor develop {barbarian} cards.",
                "Decrease your hand size by 2 (except during setup)."
            ],
            relatedCards: [
                CardName.WINTER_INU
            ]
        });
    }
}
