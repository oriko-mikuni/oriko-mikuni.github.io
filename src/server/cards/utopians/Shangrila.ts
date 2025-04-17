import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Shangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SHANGRILA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO3B",
            effectText: [
                "Passive: when you would gain {material}, instead each other player instead gain 1{progress} and you gain 2{population}.",
                "Exhaust: gain 1{material}.",
                "Solstice: if you have at least 24{population} GAME END IS TRIGGERED."
            ],
        });
    }
}
