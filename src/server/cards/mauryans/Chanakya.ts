import {ICard} from "../ICard";
import {CardName} from "../../../common/cards/CardName";
import {Card} from "../Card";
import {CardNationColour} from "../../../common/cards/CardNationColour";
import {CardStateIcon} from "../../../common/cards/CardStateIcon";
import {CardEffectReuse} from "../../../common/cards/CardEffectReuse";
import {KeywordNames} from "../../../common/keywords";

export class Chanakya extends Card implements ICard {
    constructor() {
        super({
            name: CardName.CHANAKYA,
            suit: [],
            stateSymbol: [CardStateIcon.BARBARIAN],
            typeIcon: [],
            nationColour: CardNationColour.MAU,
            cardNumber: "MAU19",
            effectText: [
                "Choose: acquire {uncivilised} and acquire {civilised} OR find [Arthashastra] and put it in your discard pile.",
                CardEffectReuse.selfHistory
            ],
            keywords: [
                KeywordNames.find
            ],
            relatedCards: [
                CardName.ARTHASHASTRA
            ]
        });
    }
}
