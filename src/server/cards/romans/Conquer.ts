import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Conquer extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_ROM,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM17",
            effectText: cardEffectReuse.CONQUER,
        });
    }
}
