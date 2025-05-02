import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class AppealToChina extends Card implements ICard {
    constructor() {
        super({
            name: CardName.APPEAL_TO_CHINA,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.JPN,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "JPN15",
            effectText: [
                "Exhaust: pay 1{material} to choose: draw a card and exile a card in the market OR add 1{goods} to a card in the market."
            ],
        });
    }
}
