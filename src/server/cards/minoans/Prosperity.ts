import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_MIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.MIN,
            cardNumber: "MIN20",
            effectText: cardEffectReuse.prosperity,
        });
    }
}
