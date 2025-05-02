import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Units, UnitsUtils} from "../../../common/Units";

export class CaribbeanSea extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARIBBEAN_SEA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI5",
            developmentCost: {progress: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 6 resources on your cards",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const total: Units = param.player.resourceOnYourCards.reduce(
            (sumUnit: Units, [,curUnit]: [ICard, Units]): Units => {
                return {
                    material: sumUnit.material + curUnit.material,
                    population: sumUnit.population + curUnit.population,
                    progress: sumUnit.progress + curUnit.progress,
                    goods: sumUnit.goods + curUnit.goods,
                }
            }, UnitsUtils.EMPTY
        );
        return Math.floor((total.goods + total.material + total.population + total.progress) / 6);
    }
}
