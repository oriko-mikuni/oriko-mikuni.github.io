import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import CardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Conquer extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_SCY,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.SCY,
            cardNumber: "SCY17",
            effectText: [
                CardEffectReuse.conquer
            ]
        });
    }
}
