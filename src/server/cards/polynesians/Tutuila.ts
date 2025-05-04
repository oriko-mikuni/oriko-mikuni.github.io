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

export class Tutuila extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TUTUILA,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL20",
            effectText: [
                "Gain 1{material}."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-1VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.LEGENDS ? -1 : 0
    }
}
