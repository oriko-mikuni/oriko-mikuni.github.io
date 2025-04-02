import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { Player } from "../../Player";
import { Card } from "../Card";
import { ICard } from "../ICard";
import { CardInPlayType } from "../../../common/cards/CardInPlayType";

export class CarthaginiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTHAGINIANS_POWER_B,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CAR1B",
            effectText: "Passive: when you would place 1{progress} on a card in the market, instead place 2{material}.",
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{material}"
        });
    }

    public getVictoryPoints(player: Player): number {
        return Math.floor(player.material / 3);
    }
}
