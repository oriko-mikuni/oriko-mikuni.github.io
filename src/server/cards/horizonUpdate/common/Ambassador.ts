import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {GameModule} from "../../../../common/cards/GameModule";

export class Ambassador extends Card implements ICard {
    constructor() {
        super({
            name: CardName.AMBASSADOR_NEW,
            suit: [CardSuitIcon.UNCIVILISED],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.MERCHANT],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1UNC14X",
            effectText: [
                "Exhaust: choose a {pinned} any other player has in play. Until the end of your turn, this card becomes a copy of that card. If that card has an exhaust and/or solstice effect, resolve them all now."
            ],
            playerCount: 3,
            victoryPoints: 1,
            gameModule: GameModule.CLASSICS_COMMON
        });
    }
}
