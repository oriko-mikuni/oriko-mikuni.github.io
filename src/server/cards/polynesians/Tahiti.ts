import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {CardLocation} from "../../../common/cards/CardLocation";

export class Tahiti extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TAHITI,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.PINNED,
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL16",
            effectText: [
                "Gain 1{population}.",
                "You MAY gain 1 mana."
            ],
            victoryPoints: 'negativeConditional',
            victoryPointsString: "-1VP if in legends",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.LEGENDS ? -1 : 0
    }
}
