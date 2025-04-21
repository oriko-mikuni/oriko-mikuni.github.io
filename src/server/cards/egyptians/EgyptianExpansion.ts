import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class EgyptianExpansion extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIAN_EXPANSION,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY7",
            effectText: [
                "Each other player abandons a {region}.",
                "You MAY acquire {region}/{tributary}."
            ],
            developmentCost: {population: 4},
            victoryPoints: 4,
        });
    }
}
