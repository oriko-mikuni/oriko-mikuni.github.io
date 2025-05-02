import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_EGY,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.EGY,
            cardNumber: "EGY16",
            effectText: CardEffectReuse.prosperity
        });
    }
}
