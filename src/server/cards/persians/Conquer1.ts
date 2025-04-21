import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Conquer1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CONQUER_PER1,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.PER,
            cardNumber: "PER18",
            effectText: [
                CardEffectReuse.conquer
            ]
        });
    }
}
