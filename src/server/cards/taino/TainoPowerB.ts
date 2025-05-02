import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class TainoPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAINO_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "TAI1B",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fertile}/{ocean}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countType(CardTypeIcon.FERTILE, param.player.selectCards())
            + Player.countType(CardTypeIcon.OCEAN, param.player.selectCards());
    }
}
