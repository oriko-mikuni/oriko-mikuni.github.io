import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {PlayerCardLocation} from "../../../Player";

export class GoldenMask extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GOLDEN_MASK,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            cardNumber: "3UNC24",
            effectText: [
                "Choose: draw a card from your discard pile OR gain 1{goods} OR trade."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history",
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === PlayerCardLocation.HISTORY ? 2 : 0;
    }
}
