import {GetVPParameter, ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {GameModule} from "../../../../common/cards/GameModule";

import {CardLocation} from "../../../../common/cards/CardLocation";

export class JadeMaskL extends Card implements ICard {
    constructor() {
        super({
            name: CardName.JADE_MASK_L_NEW,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MASK],
            cardNumber: "2UNC2X",
            effectText: [
                "Choose: draw 2 cards OR gain 1{goods} OR return 1 {exhaust} to your state card."
            ],
            victoryPoints: 'conditional',
            victoryPointsString: "2VP if in history",
            gameModule: GameModule.LEGENDS_COMMON
        });
    }

    public override getConditionalVictoryPoints(param: GetVPParameter): number {
        return param.location === CardLocation.HISTORY ? 2 : 0;
    }
}
