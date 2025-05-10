import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardExpansion} from "../../../common/cards/CardExpansion";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class Poetry extends Card implements ICard {
    constructor() {
        super({
            name: CardName.POETRY,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            startingLocation: CardStartingLocation.ACCESSION,
            nationColour: CardNationColour.TAN,
            cardNumber: "TAN2",
            effectText: [
                "All players MAY return a {unrest}.",
                "Draw a card per {unrest} returned.",
                "If [Yu Xuanji] is in your history, gain 1{progress}."
            ],
            expansion: CardExpansion.TRADE_FRIENDLY,
        });
    }
}
