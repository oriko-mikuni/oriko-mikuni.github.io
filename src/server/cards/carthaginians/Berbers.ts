import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Berbers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BERBERS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR13",
            effectText: [
                "Gain 2{population}."
            ],
        });
    }
}
