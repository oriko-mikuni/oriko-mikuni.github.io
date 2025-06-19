import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

import {CardLocation} from "../../../common/cards/CardLocation";

export class SavaiI extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SAVAI_I,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL21",
            effectText: [
                "Gain 1{population}."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-1VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? -1 : 0
    }
}
