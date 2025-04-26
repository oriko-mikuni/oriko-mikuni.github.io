import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Navigation extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NAVIGATION,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3UNC1",
            effectText: [
                "Passive: you can acquire exiled {region} cards as though they were in the market.",
                "Exhaust: play a {region} from your discard pile (spending 1 action as normal).",
                "If it was a {ocean}, gain 1{goods}."
            ],
            playerCount: 4,
            victoryPoints: 1,
        });
    }
}
