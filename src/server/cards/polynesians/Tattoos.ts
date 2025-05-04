import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Tattoos extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TATTOOS_POL,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL9",
            effectText: [
                "Free play. Draw a card from your deck or your discard pile."
            ],
        });
    }
}
