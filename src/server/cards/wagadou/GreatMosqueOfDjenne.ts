import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GreatMosqueOfDjenne extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREAT_MOSQUE_OF_DJENNE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "WAG5",
            effectText: [
                "Cannot be played unless [Adoption of Islam] is in your history.",
                "Solstice: gain 1{population} per {city}/{metropolis} you have in play. You MAY return a {unrest} from your discard pile."
            ],
            developmentCost: {population: 4},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
