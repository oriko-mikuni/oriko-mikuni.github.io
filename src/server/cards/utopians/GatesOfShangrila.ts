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
            effectText: "When put into play, flip your state\n" +
                "card to its {empire} side.\n" +
                "Exhaust: put a card into your history\n" +
                "to gain 1{progress}.\n" +
                "Solstice: choose: pay all your {progress} (minimum 5) to flip this card\n" +
                "OR draw a card.",
        });
    }
}
