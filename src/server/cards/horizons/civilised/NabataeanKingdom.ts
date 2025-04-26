import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class NabataeanKingdom extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NABATAEAN_KINGDOM,
            suit: [CardSuitIcon.CIVILISED, CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            cardNumber: "3CIV4",
            effectText: [
                "Pay 2{population} to break through for a {trade-route}.",
                CardEffectReuse.marketExile,
                "Choose: take a {unrest} OR put this card into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 3,
        });
    }
}
