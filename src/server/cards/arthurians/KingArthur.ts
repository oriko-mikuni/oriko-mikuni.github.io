import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardTypeIcon} from "../../../common/cards/CardTypeIcon";

export class KingArthur extends Card implements ICard {
    constructor() {
        super({
            name: CardName.KING_ARTHUR,
            suit: [],
            stateSymbol: [],
            typeIcon: [CardTypeIcon.KNIGHT],
            nationColour: CardNationColour.ART,
            cardNumber: "ART19",
            effectText: "Abandon a {region} with a {knight} garrisoned\n" +
                "to acquire {region}/{tributary}.",
        });
    }
}
