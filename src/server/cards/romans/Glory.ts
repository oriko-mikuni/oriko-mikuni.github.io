import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {effectReuseMultipleSentences} from "../../../common/cards/CardEffectReuse";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_ROM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM14",
            effectText: effectReuseMultipleSentences.glory,
        });
    }
}
