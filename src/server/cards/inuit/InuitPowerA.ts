import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class InuitPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INUIT_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.INU,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "INU1A",
            effectText: [
                "Passive: when you gain 3 or fewer {material}, gain 1 additional {material}.",
                "End of solstice: flip your state card."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2 {uncivilised}/{civilised}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((
            Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards())
            + Player.countSuit(CardSuitIcon.CIVILISED, param.player.selectCards())
        ) / 2);
    }
}
