import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Qarmaq extends Card implements ICard {
    constructor() {
        super({
            name: CardName.QARMAQ,
            suit: [],
            stateSymbol: [CardStateIcon.EMPIRE],
            typeIcon: [],
            nationColour: CardNationColour.INU,
            cardNumber: "INU8",
            effectText: [
                "All players MAY draw a card.",
                "Choose: gain 1{material} per {production}/{ocean} you have in play OR gain 1{population} per {region} you have in play."
            ],
        });
    }
}
