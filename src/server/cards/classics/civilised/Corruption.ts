import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateIcon} from "../../../../common/cards/CardStateIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";

export class Corruption extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CORRUPTION_C,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.ATTACK,
            cardNumber: "1CIV4",
            effectText: [
                "All players gain 2{material}.",
                "All other players take {unrest}.",
                "Gain 1{progress}."
            ],
            victoryPoints: 2,
        });
    }
}
