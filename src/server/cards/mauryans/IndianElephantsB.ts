import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class IndianElephantsB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INDIAN_ELEPHANTS_B,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU13",
            effectText: [
                "Each other player recalls a {region}.",
                "You MAY break through for {region}/{tributary}."
            ],
        });
    }
}
