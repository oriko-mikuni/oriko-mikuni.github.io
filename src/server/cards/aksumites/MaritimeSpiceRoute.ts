import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class MaritimeSpiceRoute extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MARITIME_SPICE_ROUTE_AKS,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.AKS,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "AKS2",
            effectText: [
                "Commerce: choose: gain 2{material} for each of these icons you have at least 1 of in play: {river}, {fertile}, {ocean}, and {city} OR acquire a {ocean}.",
                "Profit (3{goods}): free play a card from your discard pile (ignoring {barbarian}/{empire})."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
