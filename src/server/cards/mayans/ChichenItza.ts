import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ChichenItza extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHICHEN_ITZA,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.DEVELOPMENT,
            nationColour: CardNationColour.MAY,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MAY7",
            effectText: [
                "Solstice: choose: draw a {mask} from your discard pile OR develop a [Headpiece] OR gain 1{goods}."
            ],
            developmentCost: {material: 4, population: 2},
            victoryPoints: 'variable',
            victoryPointsString: "1VP per 2{goods}",
        });
    }

    public override getVariableVictoryPoints(param: GetVPParameter): number {
        return Math.floor(param.scoringResources.goods / 2);
    }
}
