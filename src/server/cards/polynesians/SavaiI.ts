import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {PlayerCardLocation} from "../../Player";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

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
        return param.location === PlayerCardLocation.LEGENDS ? -1 : 0
    }
}
