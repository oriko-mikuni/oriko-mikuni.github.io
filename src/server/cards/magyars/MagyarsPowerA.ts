import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Player} from "../../Player";

export class MagyarsPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.MAGYARS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.MAG,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "MAG1A",
            effectText: [
                "Exhaust: when you play a {region} with {hunt}, exhaust this card and discard 2 cards to force each other player to take a {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3 {region}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(Player.countSuit(CardSuitIcon.REGION, param.player.selectCards()) / 3);
    }
}
