import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class PolynesiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POLYNESIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "POL1B",
            effectText: [
                "Passive: when a card would be put into your history, instead discard it and take a {unrest}.",
                "Exhaust: if {isle-bound}, abandon 1 {ocean} to gain 1 mana and 1{goods}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {fame}",
            exhaustCount: 3
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.FAME, param.player.selectCards());
    }
}
