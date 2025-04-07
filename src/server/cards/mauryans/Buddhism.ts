import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {Location} from "../../Player";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Buddhism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BUDDHISM,
            suit: [],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU6",
            effectText: "Passive: reduce the cost in {material} or cards\n" +
                "to play an {unrest} by 1 (to a minimum of 1).\n" +
                "Solstice: gain 1{progress} OR return an {unrest}\n" +
                "from your discard pile.",
            developmentCost: {population: 4},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per card in history"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card[1] === Location.HISTORY
        ).length;
    }
}
