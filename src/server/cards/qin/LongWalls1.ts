import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Location} from "../../Player";

export class LongWalls1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LONG_WALLS_I,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN2",
            effectText: "Passive: reduce the cost in {material} to play\n" +
                "an {unrest} by 2 (to a minimum of 1).",
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
