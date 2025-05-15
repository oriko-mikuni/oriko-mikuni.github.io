import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class CeremonyOfTheKey extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CEREMONY_OF_THE_KEY,
            suit: [CardSuitIcon.UNREST, CardSuitIcon.UNREST],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "CUL3B",
            effectText: [
                "Replace your state card with the {corrupted} one.",
                "Exhaust: discard a card to garrison a card here.",
                "Solstice: if you have at least 13 different icons on cards garrisoned here, flip your state card to its {summoned} side, put this card into your history and TRIGGER THE GAME END."
            ],
            relatedCards: [
                CardName.CORRUPTED_CUL,
                CardName.SUMMONED_CUL
            ]
        });
    }
}
