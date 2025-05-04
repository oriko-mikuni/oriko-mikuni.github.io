import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardNationColour} from "../../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class UtopiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.UTOPIANS_POWER_A_NEW,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.UTO,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "UTO1AX",
            effectText: [
                "Passive: when you reshuffle your discard pile into a new draw deck, take a {unrest} to gain 1{progress}.",
                "Solstice: you MAY discard a card to gain 1{population}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4{population}",
            gameModule: GameModule.UTOPIANS,
            exhaustCount: 3
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.population / 4);
    }
}
