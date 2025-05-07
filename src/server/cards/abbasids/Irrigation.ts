import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Irrigation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IRRIGATION,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.ABB,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "ABB21",
            effectText: [
                "Exhaust: treat 1 {river} as 3 {production} for the rest of the turn."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
