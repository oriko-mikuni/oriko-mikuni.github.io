import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Explorers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.EXPLORERS,
            suit: [],
            stateSymbol: [CardStateIcon.VOYAGING],
            typeIcon: [],
            nationColour: CardNationColour.POL,
            cardNumber: "POL19",
            effectText: [
                "Choose: gain 1 mana to acquire a {region} OR pay 3{population}, put 3 mana into legends, and gain this card as mana to take the top {fame} card."
            ],
        });
    }
}
