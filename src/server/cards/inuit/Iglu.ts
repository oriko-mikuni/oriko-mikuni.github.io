import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Iglu extends Card implements ICard {
    constructor() {
        super({
            name: CardName.IGLU,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.INU,
            cardNumber: "INU7",
            effectText: [
                "All players MAY draw a card.",
                "Choose: gain 1{material} per {hunt} you have in play OR abandon any number of {region} to gain 1{population} per {region} abandoned."
            ],
        });
    }
}
