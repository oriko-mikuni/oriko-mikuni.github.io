import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Cacique extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CACIQUE,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.TAI,
            cardNumber: "TAI18",
            effectText: [
                "You MAY return a {unrest} garrisoned in [Zemi] to add 1{material} to [Zemi].",
                "You MAY pay 1{population} from [Zemi] to acquire a {tributary}."
            ],
        });
    }
}
