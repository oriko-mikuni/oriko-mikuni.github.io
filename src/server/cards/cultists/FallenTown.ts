import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class FallenTown extends Card implements ICard {
    constructor() {
        super({
            name: CardName.FALLEN_TOWN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.CUL,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "CUL11",
            effectText: [
                "Exhaust: choose: gain 1{material} OR gain 1{population}.",
                "You MAY exile this card to break through for an exiled {city}."
            ],
        });
    }
}
