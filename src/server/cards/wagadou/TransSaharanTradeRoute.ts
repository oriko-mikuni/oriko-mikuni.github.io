import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class TransSaharanTradeRoute extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRANS_SAHARAN_TRADE_ROUTE,
            suit: [CardSuitIcon.TRADE_ROUTE],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION],
            headerIcon: CardHeaderIcon.TRADE_ROUTE,
            nationColour: CardNationColour.WAG,
            cardInPlayType: CardInPlayType.TRADE_ROUTE,
            cardNumber: "WAG15",
            effectText: [
                "Commerce: choose: gain 3{material} and add 1{material} to a card in the market OR pay 4{material} to acquire a card with {material} on it.",
                "Profit (3{goods}): gain 1{progress} for each of these icons you have at least 1 of in play: {river}, {fertile}, {ocean}, {hunt}, {metropolis}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
