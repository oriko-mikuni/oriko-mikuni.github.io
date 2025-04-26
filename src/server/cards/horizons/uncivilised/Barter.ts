import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Barter extends Card implements ICard {
    constructor() {
        super({
            name: CardName.BARTER,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3UNC22",
            effectText: [
                "Free play. Choose: pay 1{goods} to trade OR put a card from your hand or discard pile into your history."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
            victoryPoints: 1,
        });
    }
}
