import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Location} from "../../Player";

export class LongWalls2 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LONG_WALLS_II,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN3",
            effectText: [
                "Passive: recall any [Long Walls] to avoid the effect of an {attack}."
            ],
            developmentCost: {material: 2, population: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per [Long Walls] in play"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards((card) =>
            card.location === Location.IN_PLAY &&
            card.card.name.includes("Long Walls")
        ).length;
    }
}
