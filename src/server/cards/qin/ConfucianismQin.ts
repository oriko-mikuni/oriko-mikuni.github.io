import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class ConfucianismQin extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONFUCIANISM_QIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.QIN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "QIN15",
            effectText: "Abandon [Legalism].\n" +
                "Exhaust: spend an action and discard\n" +
                "2 cards to choose: acquire {tributary}/{uncivilised}/{civilised}\n" +
                "with {population} on it OR return up to 2 {unrest} from\n" +
                "your discard pile.",
        });
    }
}
