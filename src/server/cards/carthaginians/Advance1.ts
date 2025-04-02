import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import ReusedCardEffectText from "../../../common/cards/CardEffectReuse";

export class Advance1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.ADVANCE_CAR_1,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR16",
            effectText: ReusedCardEffectText.ADVANCE
        });
    }
}
