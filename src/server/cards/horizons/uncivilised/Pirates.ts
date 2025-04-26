import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardExpansion} from "../../../../common/cards/CardExpansion";

export class Pirates extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PIRATES,
            suit: [CardSuitIcon.UNCIVILISED, CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.OCEAN],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "3UNC25",
            effectText: [
                "Choose: acquire a {attack} OR steal 2{material} per {ocean} you have in play (including this card) from each other player, then put this card into your history."
            ],
            expansion: CardExpansion.RUTHLESS,
            victoryPoints: 1,
        });
    }
}
