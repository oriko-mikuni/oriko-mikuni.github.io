import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Units, UnitsUtils} from "../../../common/Units";

export class Zemi extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ZEMI,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI21",
            effectText: [
                "Exhaust: choose: garrison up to 2 {unrest} here OR move up to 5 of your {population}/{material} here.",
                "This card is limited to 2 garrisoned cards."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 5 resources here",
            relatedCards: [
                CardName.CACIQUE
            ]
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const offers: Units = UnitsUtils.of(param.resourceUpon);
        return Math.floor((offers.goods + offers.material + offers.population + offers.progress) / 5);
    }
}
