import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Indoctrination extends Card implements ICard {
    constructor() {
        super({
            name: CardName.INDOCTRINATION,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN, CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.CUL,
            cardNumber: "CUL5",
            effectText: [
                "Gain 1{population}. You MAY discard any number of {unrest}. Gain 1 additional {population} per {unrest} discarded."
            ],
        });
    }
}
