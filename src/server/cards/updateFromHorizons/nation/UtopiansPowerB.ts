import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class UtopiansPowerB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UTOPIANS_POWER_B_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "UTO1BX",
            effectText: [
                "Passive: when you reshuffle your discard pile into a new draw deck, take a {unrest}.",
                "Solstice: you MAY return a {unrest}. If you do, each other player gains 2{material}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 3{population}",
            gameModule: GameModule.UTOPIANS
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.population / 3);
    }
}
