import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";


import {CardLocation} from "../../../../common/cards/CardLocation";

export class LostScroll extends Card implements ICard {
    constructor() {
        super({
            name: CardName.LOST_SCROLL_C,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.SCROLL],
            cardNumber: "1UNC22",
            effectText: [
                "Free play. You MAY return a card from your discard pile to the top of your deck.",
                "All players MAY draw a card."
            ],
            playerCount: 3,
            victoryPoints: 'conditional',
            victoryPointsString: "1VP if in history"
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 1 : 0;
    }
}
