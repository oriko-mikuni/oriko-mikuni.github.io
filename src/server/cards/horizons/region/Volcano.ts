import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {isInPlayLocation} from "../../../Player";

export class Volcano extends Card implements ICard {
    constructor() {
        super({
            name: CardName.VOLCANO,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [CardTypeIcon.FERTILE],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3REG1",
            effectText: [
                "Gain 1{progress}.",
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "3VP if in play"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return isInPlayLocation(param.location) ? 3 : 0;
    }
}
