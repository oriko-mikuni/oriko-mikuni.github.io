import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {effectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Prosperity extends Card implements ICard {
    constructor() {
        super({
            name: CardName.PROSPERITY_QIN,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.QIN,
            cardNumber: "QIN20",
            effectText: effectReuseMultipleSentences.prosperity
        });
    }
}
