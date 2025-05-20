import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class KingOfKings extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KOK_A,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            cardInPlayType: CardInPlayType.POWER,
            cardNumber: "?FAM?A",
            effectText: [
                "When you would gain this card, instead resolve it. Then flip this card.",
                "THIS TRIGGERS GAME END.",
                "If {barbarian}, gain 6{progress}.",
                "If {empire}, gain 3{progress} and develop for free."
            ],
            relatedCards: [
                CardName.KOK_B
            ]
        });
    }
}
