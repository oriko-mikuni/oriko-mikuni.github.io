import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import cardEffectReuse from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_VIK,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.VIK,
            cardNumber: "VIK19",
            effectText: cardEffectReuse.prosperity,
        });
    }
}
