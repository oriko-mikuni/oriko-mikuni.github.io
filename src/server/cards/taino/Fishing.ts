import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {Units, UnitsUtils} from "../../../common/Units";

export class Fishing extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FISHING,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.TAI,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "TAI20",
            effectText: [
                "Solstice: you MAY recall a {river}/{ocean} to gain 2{population} and draw a card.",
                "Choose: move 1 of your {material} here OR take a {unrest}."
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 4 resources here",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        const fishes: Units = UnitsUtils.of(param.resourceUpon);
        return Math.floor((fishes.goods + fishes.material + fishes.population + fishes.progress) / 4);
    }
}
