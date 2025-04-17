import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class AtlanteansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ATLANTEANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ATL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ATL1B",
            effectText: [
                "Passive: cards that would be placed into your history are instead discarded."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.REGION, param.player.selectCards());
    }
}
