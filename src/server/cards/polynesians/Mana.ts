import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Mana extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MANA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PERMANENT,
            cardNumber: "POL2",
            effectText: [
                "Passive: garrison any cards gained as mana here.",
                "Exhaust: if {isle-bound}, ignore the {empire} icon on the next card you play this turn.",
                "If {voyaging}, you MAY draw a card from your discard pile for every 3 mana you have."
            ],
        });
    }
}
