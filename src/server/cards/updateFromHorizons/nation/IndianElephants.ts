import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {GameModule} from "../../../../common/cards/GameModule";

export class IndianElephants extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INDIAN_ELEPHANTS_NEW,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU12X",
            effectText: [
                "Each other player recalls a {region}.",
                "You MAY choose: discard a card to break through for a {region} OR pay 3{material} to break through for a {tributary}."
            ],
            gameModule: GameModule.MAURYANS
        });
    }
}
