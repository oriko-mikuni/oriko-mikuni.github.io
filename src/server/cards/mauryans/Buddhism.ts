import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {Location} from "../../Player";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Buddhism extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BUDDHISM,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAU,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAU6",
            effectText: [
                "Passive: reduce the cost in {material} or cards to play an {unrest} by 1 (to a minimum of 1).",
                "Solstice: gain 1{progress} OR return an {unrest} from your discard pile."
            ],
            developmentCost: {population: 4},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per card in history"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card.location === Location.HISTORY
        ).length;
    }
}
