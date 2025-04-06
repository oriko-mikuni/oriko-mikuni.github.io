import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";

export class Settlers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SETTLERS,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE18",
            effectText: "Choose: pay 1{population} to acquire {region} OR\n" +
                "gain 1{progress} OR return an {unrest}.",
        });
    }
}
