import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class KingdomOfKush extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KINGDOM_OF_KUSH,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.AKS,
            cardNumber: "AKS10",
            effectText: [
                "Choose: gain 2{progress} OR pay 1{progress} to break through for a {trade-route} and put this card into history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
