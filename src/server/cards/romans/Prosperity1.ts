import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Prosperity1 extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_ROM1,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM15",
            effectText: cardEffectReuse.prosperity,
        });
    }
}
