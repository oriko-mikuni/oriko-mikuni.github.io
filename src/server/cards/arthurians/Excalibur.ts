import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Excalibur extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EXCALIBUR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ART,
            cardNumber: "ART7",
            effectText: "Abandon [Viviane of the Lake] OR [Ynys Afallach] " +
                "to break through for {tributary}/{civilised}.",
            victoryPoints: 2,
        });
    }
}
