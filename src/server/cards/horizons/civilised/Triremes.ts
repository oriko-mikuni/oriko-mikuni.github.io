import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Triremes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TRIREMES,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3CIV17",
            effectText: [
                "Free play. Each other player recalls a {region}.",
                "Discard a card to draw a card per {ocean} you have in play (max 3) and steal 1{population} from each other player."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 2,
        });
    }
}
