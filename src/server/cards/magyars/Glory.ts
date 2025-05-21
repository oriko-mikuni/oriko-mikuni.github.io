import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class Glory extends Card implements ICard {
    constructor() {
        super({
            name: CardName.GLORY_MAG,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAG,
            cardNumber: "MAG19",
            effectText: CardEffectReuse.glory,
            keywords: [
                KeywordNames.look
            ]
        });
    }
}
