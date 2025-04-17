import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";

export class KingOfKingsB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KOK_B,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.POWER_B,
            cardNumber: "FAM_B",
            effectText: [
                "When you would gain this card, instead resolve it. Multiple players can resolve this card.",
                "If {barbarian}, gain 4{progress}.",
                "If {empire}, develop for free."
            ],
        });
    }
}
