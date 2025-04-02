import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardName} from "../../../common/cards/CardName";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {Player} from "../../Player";
import {Card} from "../Card";
import {ICard} from "../ICard";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

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
            effectText: "Exhaust: when you acquire {uncivilised} or break through for {uncivilised}, exhaust this card.\n" +
                "Each other player takes {unrest}.\n",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per {uncivilised}"
        });
    }

    // exhaust to double material gain effect is hooked in Player.gainResource()

    public getVictoryPoints(player: Player): number {
        return player.suitCount(CardSuitIcon.UNCIVILISED);
    }
}
