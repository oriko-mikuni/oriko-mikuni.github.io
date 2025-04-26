import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class EpicPoetry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EPIC_POETRY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3CIV2",
            effectText: [
                "Passive: when you would acquire or break through for a {uncivilised}/{civilised}, you MAY instead break through for an exiled card of the same suit. If you do, recall this card."
            ],
            victoryPoints: 2,
        });
    }
}
