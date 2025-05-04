import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class WakaHouruaLargeCanoes extends Card implements ICard {
    constructor() {
        super({
            name: CardName.WAKA_HOURUA_LARGE_CANOES,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.POL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "POL18",
            effectText: [
                "Cannot be garrisoned or gained as mana.",
                "Exhaust: if {voyaging}, discard a card and abandon this card to develop.",
                "If {isle-bound}, abandon [Overpopulation] to flip your state card."
            ],
        });
    }
}
