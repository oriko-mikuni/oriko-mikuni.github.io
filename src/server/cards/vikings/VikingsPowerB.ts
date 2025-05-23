import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class VikingsPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VIKINGS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "VIK1B",
            effectText: [
                "Passive: cards that would be placed into your history are instead discarded.",
                "When you take {unrest}, look at the top card of your nation deck. You MAY place it at the bottom of the nation deck."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {variable} card",
            keywords: [
                KeywordNames.look
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card.card.victoryPoints === 'variable'
        ).length * 2;
    }
}
