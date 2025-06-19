import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GrandLibraryOfBaghdad extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GRAND_LIBRARY_OF_BAGHDAD,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ABB6",
            effectText: [
                "Garrison up to 2 cards here.",
                "Solstice: you MAY draw a card.",
                "You MAY garrison a card here."
            ],
            developmentCost: {material: 4, population: 2},
            developmentCostString: [
                ", [Baghdad] must be in play"
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 'variable',
            victoryPointsString: "1VP per garrisoned card here",
            relatedCards: [
                CardName.BAGHDAD
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(card => card.location === this.name).length;
    }
}
