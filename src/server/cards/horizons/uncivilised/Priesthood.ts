import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Priesthood extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PRIESTHOOD,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MIRACLE],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC8",
            effectText: [
                "Take a {unrest}.",
                "Exhaust: gain 1 action.",
                "Solstice: choose: abandon this card OR if {barbarian} place a card on the top of your deck, if {empire} pay 1{progress}."
            ],
            playerCount: 3,
            victoryPoints: 1,
        });
    }
}
