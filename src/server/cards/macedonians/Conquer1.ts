import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateSymbol} from "../../../common/cards/CardStateSymbol";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Conquer1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_MAC1,
            suit: [],
            stateSymbol: [CardStateSymbol.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAC,
            cardNumber: "MAC15",
            effectText: cardEffectReuse.conquer,
        });
    }
}
