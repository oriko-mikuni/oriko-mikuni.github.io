import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class CeremonialGathering extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CEREMONIAL_GATHERING,
            suit: [CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "CUL3A",
            effectText: [
                "Flip your state card to its {barbarian} side.",
                "Passive: when you gain {population}, add it here.",
                "Solstice: choose: remove all {population} here (minimum 15) to flip this card OR draw a card from your discard pile."
            ],
            relatedCards: [
                CardName.CEREMONY_OF_THE_KEY
            ]
        });
    }
}
