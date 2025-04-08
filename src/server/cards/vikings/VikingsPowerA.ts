import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class VikingsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VIKINGS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "VIK1A",
            effectText: "Passive: cards that would be placed\n" +
                "into your history are instead discarded.\n" +
                "When you take {unrest}, look at the top card\n" +
                "of your nation deck. You MAY place it\n" +
                "at the bottom of the nation deck.\n" +
                "Exhaust: when you return an {unrest},\n" +
                "exhaust this card to draw 2 cards.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {variable} card"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return param.player.selectCards(
            card => card.card.victoryPoints === 'variable'
        ).length;
    }
}
