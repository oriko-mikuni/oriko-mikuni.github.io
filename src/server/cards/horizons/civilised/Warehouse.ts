import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Warehouse extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WAREHOUSE,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3CIV7",
            effectText: [
                "Exhaust: return 1 {exhaust} from a {merchant} to your state card.",
                "Solstice: discard a card."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 2,
        });
    }
}
