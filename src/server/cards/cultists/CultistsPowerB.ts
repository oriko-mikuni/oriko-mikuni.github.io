import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";
import {KeywordNames} from "../../../common/keywords";

export class CultistsPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CULTISTS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CUL1B",
            effectText: [
                "Passive: when you would place {progress} on a card in the market, instead place 1{population} and exile a card from the market.",
                "You do not score any negative points for {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {unrest}",
            keywords: [
                KeywordNames.noNegativeFromUnrest
            ],
            exhaustCount: 3
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Player.countSuit(CardSuitIcon.UNREST, param.player.selectCards());
    }
}
