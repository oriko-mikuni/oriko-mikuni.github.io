import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardSuitIcon} from "../../../common/cards/CardSuitIcon";

export class ImperialExaminations extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IMPERIAL_EXAMINATIONS,
            suit: [CardSuitIcon.CIVILISED],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN16",
            effectText: [
                "Acquire a {uncivilised}/{civilised} with {population} on it.",
                "If {empire}, find [Scholar Officials] and free play it."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
