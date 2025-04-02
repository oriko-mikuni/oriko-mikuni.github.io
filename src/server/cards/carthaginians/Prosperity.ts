import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_CAR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR9",
            effectText: "All players MAY draw 1 card.\n" +
                "Choose: gain 1{material} per {production}\n" +
                "OR gain 1{population} per {region} you have in play.\n",
        });
    }
}
