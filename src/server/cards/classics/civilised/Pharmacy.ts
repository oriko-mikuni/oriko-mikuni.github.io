import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardStateSymbol} from "../../../../common/cards/CardStateSymbol";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Pharmacy extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PHARMACY,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [CardStateSymbol.EMPIRE],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "1CIV8",
            effectText: [
                "Solstice: choose: gain 1{population} OR pay 2{population} to gain 1{progress}."
            ],
            victoryPoints: 2,
        });
    }
}
