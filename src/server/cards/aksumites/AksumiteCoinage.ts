import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class AksumiteCoinage extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AKSUMITE_COINAGE,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "AKS4",
            effectText: [
                "Exhaust: draw 2 cards and add 1{material} to a card in the market.",
                "Solstice: gain 2{material}."
            ],
            developmentCost: {material: 4, population: 3},
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
