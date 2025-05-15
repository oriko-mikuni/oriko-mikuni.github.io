import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class ExoticTrade extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EXOTIC_TRADE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.AKS,
            cardNumber: "AKS8",
            effectText: [
                "Free play. Acquire a card in the market with {material} on it and place it on the top of your deck."
            ],
            developmentCost: {goods: 1, material: 3},
            developmentCostString: [
                ", OR free if [Land of Sheba] is in play"
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
            relatedCards: [
                CardName.AKSUMITE_COINAGE,
                CardName.LAND_OF_SHEBA
            ]
        });
    }
}
