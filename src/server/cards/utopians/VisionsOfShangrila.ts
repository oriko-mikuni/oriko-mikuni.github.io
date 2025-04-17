import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class VisionsOfShangrila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VISIONS_OF_SHANGRILA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "UTO2A",
            effectText: [
                "Exhaust: when you return an {unrest}, exhaust this card and spend an action to gain 1{progress}.",
                "Solstice: choose: pay all your {progress} (minimum 5) to flip this card OR discard a card, then draw a card."
            ],
        });
    }
}
