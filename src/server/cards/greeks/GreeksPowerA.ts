import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class GreeksPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GREEKS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.GRE,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "GRE1A",
            effectText: [
                "Exhaust: spend 2 actions to break through for {uncivilised}/{civilised}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 7 cards"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.selectCards().length / 7);
    }
}
