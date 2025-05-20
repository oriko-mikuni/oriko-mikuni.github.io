import {ICard} from "../../ICard";
import {CardName} from "../../../../common/cards/CardName";
import {Card} from "../../Card";
import {CardSuitIcon} from "../../../../common/cards/CardSuitIcon";
import {KeywordNames} from "../../../../common/keywords";

export class Supreme1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SUPREME1,
            suit: [CardSuitIcon.FAME],
            stateSymbol: [],
            typeIcon: [],
            cardNumber: "3FAM2",
            effectText: [
                "No effect when played. Cannot be discarded during your Clean-up step.",
                "Cannot be garrisoned in a {region}."
            ],
            victoryPoints: 11,
            keywords: [
                KeywordNames.supreme
            ]
        });
    }
}
