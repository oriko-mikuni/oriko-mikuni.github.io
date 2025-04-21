import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class NomadsB extends Card implements ICard {
    constructor() {
        super({
            name: CardName.NOMADS_B,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY15",
            effectText: [
                "All players MAY draw a card.",
                "Gain 1{material} per {production} you have in play."
            ],
        });
    }
}
