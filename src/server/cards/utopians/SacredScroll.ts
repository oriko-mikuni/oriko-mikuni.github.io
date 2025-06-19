import {GetVPParameter, ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";


import {CardLocation} from "../../../common/cards/CardLocation";

export class SacredScroll extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SACRED_SCROLL,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.SCROLL],
            nationColour: CardNationColour.UTO,
            cardNumber: "UTO12",
            effectText: [
                "Free play. All players MAY draw a card."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 1 : 0;
    }
}
