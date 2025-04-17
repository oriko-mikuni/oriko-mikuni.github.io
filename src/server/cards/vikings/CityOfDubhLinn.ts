import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class CityOfDubhLinn extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CITY_OF_DUBH_LINN,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [CardTypeIcon.CITY],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.VIK,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "VIK9",
            effectText: [
                CardEffectReuse.city
            ],
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 8{material}"
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.player.material / 8);
    }
}
