import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";

export class Settlers extends Card implements ICard {
    constructor() {
        super({
            name: CardName.SETTLERS,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.GRE,
            cardNumber: "GRE18",
            effectText: [
                "Choose: pay 1{population} to acquire {region} OR gain 1{progress} OR return an {unrest}."
            ],
        });
    }
}
