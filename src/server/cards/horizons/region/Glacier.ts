import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {PlayerCardLocation} from "../../../Player";

export class Glacier extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLACIER,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3REG6",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
                "Exhaust: if there is a card garrisoned here, choose: add 2{material} to this card OR put this card into your history."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 2 : 0;
    }
}
