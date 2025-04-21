import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class CarthaginianTraders extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CARTHAGINIAN_TRADERS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR19",
            effectText: [
                "Free play. Add 1{material} to a card in the market.",
                "You MAY put a card from your hand or discard pile into your history."
            ],
        });
    }
}
