import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class ScythiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SCYTHIANS_POWER_A_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.SCY,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "SCY1AX",
            effectText: [
                "Exhaust: look at the top 2 cards of your nation deck. You MAY place 1 of them at the bottom of the nation deck.",
                "You MAY spend an action to break through for a {region}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 6{material}",
            gameModule: GameModule.SCYTHIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.material / 6);
    }
}
