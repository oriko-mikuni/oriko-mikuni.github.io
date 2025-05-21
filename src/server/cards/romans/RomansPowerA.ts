import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class RomansPowerA extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ROMANS_POWER_A,
            suit: [CardSuitIcon.POWER],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            startingLocation: CardStartingLocation.IN_PLAY,
            nationColour: CardNationColour.ROM,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "ROM1A",
            effectText: [
                "Passive: whenever you look at any number of cards from the {fame} deck, look at one additional card, then gain 1{progress}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4{population}",
            keywords: [
                KeywordNames.look
            ],
            relatedCards: [
                CardName.GLORY_ROM
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.population / 4);
    }
}
