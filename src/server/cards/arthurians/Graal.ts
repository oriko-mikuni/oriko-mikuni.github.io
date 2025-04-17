import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Graal extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAAL,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardNumber: "ART3",
            effectText: [
                "Free play. TRIGGERS GAME END.",
                "You MAY draw a card from your history.",
                "You MAY acquire an exiled card (not a{knight}).",
                "[Cannot be targeted in the quest area unless it is the last impending quest.]"
            ],
            victoryPoints: 8,
        });
    }
}
