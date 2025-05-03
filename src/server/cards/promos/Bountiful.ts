import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";
import {KeywordNames} from "../../../common/keywords";

export class Bountiful extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROMO_BOUNTIFUL,
            suit: [CardSuitIcon.FAME, CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.PRODUCTION, CardTypeIcon.FERTILE, CardTypeIcon.RIVER, CardTypeIcon.HUNT],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "9FAM1",
            effectText: [
                "You MAY draw a card from your discard pile. You MAY garrison a card.",
                "Exhaust: you MAY garrison a card.",
                "Solstice: for every 2 cards garrisoned here, gain 1{population}."
            ],
            victoryPoints: 4,
            keywords: [
                KeywordNames.bountiful
            ]
        });
    }
}
