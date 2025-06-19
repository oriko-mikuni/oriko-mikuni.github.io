import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

import {isInPlayLocation} from "../../../common/cards/CardLocation";

export class LongWalls4 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LONG_WALLS_IV,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN5",
            effectText: [
                "Exhaust: if you have at least 3 [Long Walls] in play, exhaust this card and return a card to the top of your deck to gain 1 action."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per [Long Walls] in play",
            relatedCards: [
                CardName.LONG_WALLS_I,
                CardName.LONG_WALLS_II,
                CardName.LONG_WALLS_III
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards((card) =>
            isInPlayLocation(card.location) &&
            card.card.name.includes("Long Walls")
        ).length;
    }
}
