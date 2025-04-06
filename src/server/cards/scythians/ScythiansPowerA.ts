import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ScythiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCYTHIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "SCY1A",
            effectText: "Exhaust: spend an action and take {unrest} to\n" +
                "break through for {region}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 6{material}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.material / 6);
    }
}
