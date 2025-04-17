import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {Location} from "../../Player";

export class SacredScroll1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SACRED_SCROLL1,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.SCROLL],
            nationColour: CardNationColour.UTO,
            cardNumber: "UTO13",
            effectText: [
                "Free play. All players MAY draw a card."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === Location.HISTORY ? 1 : 0;
    }
}
