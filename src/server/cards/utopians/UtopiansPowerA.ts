import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class UtopiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UTOPIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "UTO1A",
            effectText: [
                "Passive: when your deck is empty, take {unrest}.",
                "Solstice: all other players MAY return an {unrest}. You gain 1{population} for each {unrest} returned."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4{population}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.population / 4);
    }
}
