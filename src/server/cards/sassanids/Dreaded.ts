import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Dreaded extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DREADED,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.SAS,
            cardNumber: "SAS7",
            effectText: [
                "Each other player abandons a {city}/{metropolis}.",
                "You MAY break through for a {region}/{tributary}.",
                "You MAY put this card into your history to exile the top card of the {fame} deck (not [King of Kings])."
            ],
            developmentCost: {material: 2, population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
