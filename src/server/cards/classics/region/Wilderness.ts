import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";
import {CardEffectReuse} from "../../../../common/cards/CardEffectReuse";

export class Wilderness extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WILDERNESS,
            suit: [CardSuitIcon.REGION],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1REG1",
            effectText: [
                CardEffectReuse.marketExile,
                CardEffectReuse.garrisonACard,
                "Passive: you MAY recall this card to avoid the effect of an {attack}."
            ],
            playerCount: 3,
            victoryPoints: 1,
        });
    }
}
