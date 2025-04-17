import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class EgyptiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EGYPTIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.EGY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "EGY1A",
            effectText: [
                "Exhaust: choose: spend an action and take {unrest} to develop OR pay 1{population} and take {unrest} to gain an action."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {civilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards()) * 2;
    }
}
