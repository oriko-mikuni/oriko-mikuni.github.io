import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class ScythiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCYTHIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "SCY1B",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{material} / 3 {region}"
        });
    }
    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((
            param.player.material +
            Player.countSuit(CardSuitIcon.REGION, param.player.selectCards())
        ) / 3);
    }
}
