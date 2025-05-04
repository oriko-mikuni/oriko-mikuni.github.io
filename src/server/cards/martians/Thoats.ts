import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardHeaderIcon} from "../../../common/cards/CardHeaderIcon";
import {CardInPlayType} from "../../../common/cards/CardInPlayType";

export class Thoats extends Card implements ICard {
    constructor() {
        super({
            name: CardName.THOATS,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            headerIcon: CardHeaderIcon.PINNED,
            nationColour: CardNationColour.MRT,
            cardInPlayType: CardInPlayType.PINNED,
            cardNumber: "MRT25",
            effectText: [
                "Exhaust: discard a card to free play a {region}. Each other player gains 1{material}."
            ],
        });
    }
}
