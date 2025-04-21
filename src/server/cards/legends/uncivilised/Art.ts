import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {CardHeaderIcon} from "../../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../../common/cards/CardInPlayType";

export class Art extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ART,
            suit: [CardSuitIcon.UNCIVILISED,CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "2UNC19",
            effectText: [
                "Solstice: if {barbarian}, you MAY pay 1{material} to return an {unrest}. If {empire}, you MAY pay 3{material} to gain 1{progress}."
            ],
            victoryPoints: 1,
        });
    }
}
