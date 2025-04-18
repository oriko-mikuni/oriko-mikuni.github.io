import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {EffectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_PER,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.PER,
            cardNumber: "PER15",
            effectText: EffectReuseMultipleSentences.prosperity
        });
    }
}
