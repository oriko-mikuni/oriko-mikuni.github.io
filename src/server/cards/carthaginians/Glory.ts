import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {EffectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_CAR,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.CAR,
            cardNumber: "CAR14",
            effectText: EffectReuseMultipleSentences.glory,
        });
    }
}
