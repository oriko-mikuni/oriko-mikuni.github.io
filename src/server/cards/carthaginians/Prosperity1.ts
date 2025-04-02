import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import ReusedCardEffectText from "../../../common/cards/CardEffectReuse";

export class Prosperity1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_CAR_1,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR15",
            effectText: ReusedCardEffectText.PROSPERITY
        });
    }
}
