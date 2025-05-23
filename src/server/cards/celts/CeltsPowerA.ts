import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardName} from "../../../common/cards/CardName";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Card} from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class CeltsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CEL1A",
            effectText: [
                "Exhaust: when you acquire {uncivilised} or break through for {uncivilised}, exhaust this card.",
                "Each other player takes {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNCIVILISED, param.player.selectCards());
    }
}
