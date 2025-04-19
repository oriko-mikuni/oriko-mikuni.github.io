import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {CardTypeIcon} from "../../../../common/cards/CardTypeIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Metropolis extends Card implements ICard {
    constructor() {
        super({
            name: CardName.METROPOLIS_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [CardTypeIcon.METROPOLIS],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1CIV6",
            effectText: [
                CardEffectReuse.metropolis
            ],
            victoryPoints: 2,
        });
    }
}
