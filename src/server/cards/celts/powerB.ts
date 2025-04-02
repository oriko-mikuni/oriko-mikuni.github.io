import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { Player } from "../../Player";
import { Card } from "../Card";
import { ICard } from "../ICard";
import { CardInPlayType } from "../../../common/cards/CardInPlayType";

export class CeltsPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CELTS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CEL,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CEL1B",
            victoryPoints: 'variable',
            victoryPointsString: "2VP per {uncivilised}"
        });
    }

    // exhaust to double material gain effect is hooked in Player.gainResource()

    public getVictoryPoints(player: Player): number {
        return player.suitCount(CardSuitIcon.UNCIVILISED) * 2;
    }
}
