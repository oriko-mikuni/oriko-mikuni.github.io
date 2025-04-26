import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {Player} from "../../../Player";
import {GameModule} from "../../../../common/cards/GameModule";

export class ScythiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCYTHIANS_POWER_B_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "SCY1BX",
            effectText: [
                "Exhaust: look at the top 2 cards of your nation deck. You MAY place 1 of them at the bottom of the nation deck."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{material}/{region}",
            gameModule: GameModule.SCYTHIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor((
            param.player.material +
            Player.countSuit(CardSuitIcon.REGION, param.player.selectCards())
        ) / 3);
    }
}
