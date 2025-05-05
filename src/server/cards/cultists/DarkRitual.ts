import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class DarkRitual extends Card implements ICard {
    constructor() {
        super({
            name: CardName.DARK_RITUAL,
            suit: [],
            stateSymbol: [CardStateIcon.CORRUPTED, CardStateIcon.SUMMONED],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL4",
            effectText: [
                "Return 3 {unrest} from your discard pile and pay 2{population} to take the top {fame} card."
            ],
        });
    }
}
