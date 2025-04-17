import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class PeredurSirPercival extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PEREDUR_SIR_PERCIVAL,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            nationColour: CardNationColour.ART,
            cardNumber: "ART17",
            effectText: [
                "Choose: return an {unrest} and you MAY garrison in a {region} to trigger that card's play effect OR find [Graal] in your discard pile or draw deck and exile this card."
            ],
        });
    }
}
