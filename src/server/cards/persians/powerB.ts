import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class PersiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PERSIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.PER,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "PER1B",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {tributary}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.suitCount(CardSuitIcon.TRIBUTARY);
    }
}
