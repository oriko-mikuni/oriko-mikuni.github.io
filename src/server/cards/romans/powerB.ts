import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {Player} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class RomansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ROM1B",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2{population}"
        });
    }

    public getVictoryPoints(player: Player): number {
        return player.population / 2;
    }
}
