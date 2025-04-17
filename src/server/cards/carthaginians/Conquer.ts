import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Conquer extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_CAR,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR17",
            effectText: [
                CardEffectReuse.conquer
            ]
        });
    }
}
