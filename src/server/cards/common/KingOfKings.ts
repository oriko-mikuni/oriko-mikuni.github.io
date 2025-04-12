import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class KingOfKings extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KOK,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_A,
            cardNumber: "FAM_A",
            effectText: "When you would gain this card, instead resolve it. Then flip this card.\n" +
                "THIS TRIGGERS GAME END.\n" +
                "If {barbarian}, gain 6{progress}.\n" +
                "If {empire}, gain 3{progress} and develop for free.",
        });
    }
}
