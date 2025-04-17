import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Cacao extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CACAO,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.OLM,
            cardNumber: "OLM9",
            effectText: [
                "All players MAY return an {unrest} from their hand or discard pile.",
                "Gain 1{progress} for each {unrest} returned."
            ],
        });
    }
}
