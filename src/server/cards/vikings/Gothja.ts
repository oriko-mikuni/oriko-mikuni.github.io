import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";

export class Gothja extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GOTHJA,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK16",
            effectText: "Look at the top card of your nation deck.\n" +
                "You MAY shuffle the nation deck.\n" +
                "Choose: return an {unrest} and gain 1{population}\n" +
                "OR draw 2 cards.",
        });
    }
}
