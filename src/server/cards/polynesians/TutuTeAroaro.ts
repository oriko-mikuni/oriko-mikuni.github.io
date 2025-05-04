import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardStartingLocation} from "../../../common/cards/CardStartingLocation";

export class TutuTeAroaro extends Card implements ICard {
    constructor() {
        super({
            name: CardName.TUTU_TE_AROARO,
            suit: [],
            stateSymbol: [CardStateIcon.ISLE_BOUND],
            typeIcon: [],
            startingLocation: CardStartingLocation.NATION,
            nationColour: CardNationColour.POL,
            cardNumber: "POL14",
            effectText: [
                "Choose: acquire a {region} (including from exiled cards) OR find [Tahiti] and free play it.",
                "You MAY abandon [Overpopulation]. Flip your state card.",
                "Put this card into legends."
            ],
        });
    }
}
