import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {GameModule} from "../../../../common/cards/GameModule";

export class Berbers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BERBERS_NEW,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR13X",
            effectText: [
                "Free play. You MAY gain all resources from a card in the market. You MAY add 1{material} to a card in the market."
            ],
            gameModule: GameModule.CARTHAGINIANS
        });
    }
}
