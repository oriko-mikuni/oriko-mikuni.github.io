import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GatesOfShangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GATES_OF_SHANGRILA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO3A",
            effectText: [
                "When put into play, flip your state card to its {empire} side.",
                "Exhaust: put a card into your history to gain 1{progress}.",
                "Solstice: choose: pay all your {progress} (minimum 5) to flip this card OR draw a card."
            ],
            relatedCards: [
                CardName.SHANGRILA
            ]
        });
    }
}
