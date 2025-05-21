import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_ROM,
            suit: [],
            stateSymbol: [],
            typeIcon: [],
            nationColour: CardNationColour.ROM,
            cardNumber: "ROM14",
            effectText: CardEffectReuse.glory,
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
