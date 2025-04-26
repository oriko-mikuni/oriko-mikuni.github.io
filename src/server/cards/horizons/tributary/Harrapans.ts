import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Harrapans extends Card implements ICard {
    constructor() {
        super({
            name: CardName.HARRAPANS,
            suit: [CardSuitIcon.TRIBUTARY],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "3TRI2",
            effectText: [
                CardEffectReuse.metropolis
            ],
            playerCount: 3,
            victoryPoints: 3,
        });
    }
}
