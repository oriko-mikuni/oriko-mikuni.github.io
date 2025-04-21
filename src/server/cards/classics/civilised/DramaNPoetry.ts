import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class DramaNPoetry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DRAMA_N_POETRY_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1CIV1",
            effectText: [
                "Free play. Steal 1{progress} from each other player. Each player MAY discard a card to return an {unrest}."
            ],
            playerCount: 4,
            victoryPoints: 2,
        });
    }
}
