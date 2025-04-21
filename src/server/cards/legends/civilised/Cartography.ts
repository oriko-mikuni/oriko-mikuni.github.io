import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Cartography extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTOGRAPHY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2CIV8",
            effectText: [
                "Passive: you can acquire exiled {region}/{tributary} cards as though they were in the market.",
                "Remember that when you acquire an exiled {tributary} card, you must take {unrest}."
            ],
            playerCount: 3,
            victoryPoints: 2,
        });
    }
}
