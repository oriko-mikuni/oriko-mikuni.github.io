import { CardHeaderIcon } from "../../../common/cards/CardHeaderIcon";
import { CardName } from "../../../common/cards/CardName";
import { CardNationColour } from "../../../common/cards/CardNationColour";
import { CardStartingLocation } from "../../../common/cards/CardStartingLocation";
import { CardSuitIcon } from "../../../common/cards/CardSuitIcon";
import { Card } from "../Card";
import {GetVPParameter, ICard} from "../ICard";
import { CardInPlayType } from "../../../common/cards/CardInPlayType";

export class CarthaginiansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTHAGINIANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.CAR,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "CAR1A",
            effectText: [
                "Passive: when you would place 1{progress} on a card in the market, instead place 1{material}.",
                "Exhaust: when you gain a card from the market with {material} on it, double the {material} gained."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 6{material}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.material / 6);
    }
}
