import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class IndianElephants extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INDIAN_ELEPHANTS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU12",
            effectText: [
                "Each other player recalls a {region}.",
                "You MAY break through for {region}/{tributary}."
            ],
        });
    }
}
